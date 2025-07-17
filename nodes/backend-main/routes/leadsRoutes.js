import { getLeadsController } from "../controllers/leadsController.js";

export const leadsRoutes = async (fastify, opts) => {
  fastify.addHook("onRequest",fastify.authenticate)
  fastify.get("/", async (request, reply) => {
    return getLeadsController(request, reply);
  });
};
