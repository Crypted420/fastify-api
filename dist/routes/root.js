"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        const response = {
            message: 'Welcome to Fastify Hello World API on Railway by me',
            timestamp: new Date().toISOString(),
        };
        return response;
    });
};
exports.default = root;
//# sourceMappingURL=root.js.map