"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate = (req, reply) => {
    const token = req.headers['authorization'];
    if (!token || token !== 'x-your-secret-token') {
        reply.status(401).send({ error: 'Unauthorized' });
        return;
    }
    // Token is valid, proceed with the request
    req.log.info('User authenticated successfully');
};
exports.default = authenticate;
