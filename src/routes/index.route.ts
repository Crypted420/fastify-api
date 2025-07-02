import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { createIndexController, indexController } from '../controllers/index.controller';

export const indexRoute = async (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    done: HookHandlerDoneFunction
): Promise<void> => {

    fastify.get('/', {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'number' }
                    }
                }
            }
        }
    }, indexController);

    fastify.post('/create', createIndexController);

    done();
}