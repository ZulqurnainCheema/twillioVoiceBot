import bcrypt from "bcrypt";
import {
  createUser,
  findByEmail,
  saveRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
} from "../models/userModels.js";

const ACCESS_EXP = 15 * 60; // 15 min
const REFRESH_EXP = 7 * 24 * 3600; // 7 days

export async function register(req, reply) {
  const { email, password } = req.body;
  if (await findByEmail(email)) return reply.code(409).send("exists");
  const hash = await bcrypt.hash(password, 10);
  await createUser(email, hash);
  reply.send("ok");
}

export async function login(req, reply, app) {
  const { email, password } = req.body;
  const user = await findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password)))
    return reply.code(401).send("bad creds");

  const accessToken = await app.jwt.sign(
    { sub: user.id, email },
    process.env.JWT_SECRET,
    { expiresIn: ACCESS_EXP }
  );
  const refreshToken = await app.jwt.sign(
    { sub: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_EXP }
  );

  await saveRefreshToken(
    refreshToken,
    user.id,
    Date.now() + REFRESH_EXP * 1000
  );

  reply
    .setCookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      maxAge: REFRESH_EXP * 1000,
      secure: false, // true in prod
    })
    .send({ accessToken });
}

export async function refresh(req, reply, app) {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return reply.code(401).send("no token");

  const dbToken = await findRefreshToken(refreshToken);
  if (!dbToken) return reply.code(403).send("invalid");

  try {
    const payload = app.jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );
    const user = await findByEmail(payload.sub);
    if (!user) throw new Error();

    // rotate
    await deleteRefreshToken(refreshToken);
    const newAccess = app.jwt.sign(
      { sub: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: ACCESS_EXP }
    );
    const newRefresh = app.jwt.sign(
      { sub: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: REFRESH_EXP }
    );
    await saveRefreshToken(
      newRefresh,
      user.id,
      Date.now() + REFRESH_EXP * 1000
    );

    reply
      .setCookie("refreshToken", newRefresh, {
        httpOnly: true,
        path: "/",
        maxAge: REFRESH_EXP * 1000,
        secure: false,
      })
      .send({ accessToken: newAccess });
  } catch {
    reply.code(401).send("bad refresh");
  }
}

export async function logout(req, reply) {
  const { refreshToken } = req.cookies;
  if (refreshToken) await deleteRefreshToken(refreshToken);
  reply.clearCookie("refreshToken").send("logged out");
}
