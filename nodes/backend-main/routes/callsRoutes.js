import { getCallsController } from "../controllers/callsController.js";

export const callsRoutes = async (fastify, options) => {
  fastify.addHook("onRequest",fastify.authenticate)
  fastify.get('/',async (request, reply) => {
    return getCallsController(request,reply)
  });
}
