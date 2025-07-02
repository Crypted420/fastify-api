import { FastifyReply, FastifyRequest } from "fastify";

const authenticate = (req: FastifyRequest, reply: FastifyReply) => {
    const token = req.headers['authorization'];
    if (!token || token !== 'x-your-secret-token') {
        reply.status(401).send({ error: 'Unauthorized' });
        return;
    }
    // Token is valid, proceed with the request
    req.log.info('User authenticated successfully');
}

export default authenticate;