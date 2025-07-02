"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = async (fastify) => {
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
};
exports.default = user;
//# sourceMappingURL=index.js.map