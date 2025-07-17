import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const createUser = (email, hash) =>
  prisma.user.create({ data: { email, password: hash } });

export const findByEmail = (email) =>
  prisma.user.findUnique({ where: { email } });

export const saveRefreshToken = (token, userId, exp) =>
  prisma.refreshToken.create({
    data: { token, userId, expiresAt: new Date(exp) },
  });

export const findRefreshToken = (token) =>
  prisma.refreshToken.findUnique({ where: { token } });

export const deleteRefreshToken = (token) =>
  prisma.refreshToken.deleteMany({ where: { token } });
