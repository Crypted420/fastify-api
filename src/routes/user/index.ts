import { FastifyPluginAsync } from "fastify";

const user: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const response = {
      message: 'User route is working',
      timestamp: new Date().toISOString(),
    };
    return response;
  });

  fastify.post('/user/create', async (request, reply) => {
    const response = {
      message: 'User created successfully',
      timestamp: new Date().toISOString(),
    };
    return response;
  });
}
export default user;