import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/usersController.js";

export default async function userRoutes(app) {
  
  app.post("/register", async (request, reply) => {
    return register(request, reply, app);
  });
  app.post("/login", async (request, reply) => {
    return login(request, reply, app);
  });
  app.post("/refresh", async (request, reply) => {
    return refresh(request, reply, app);
  });
  app.post("/logout", async (request, reply) => {
    return logout(request, reply, app);
  });
}
