import fp from 'fastify-plugin';

export default fp(async function authPlugin (fastify, opts) {
  // 1. JWT is already registered once, so just add the decorator
  fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ message: 'Unauthorized' });
    }
  });
});