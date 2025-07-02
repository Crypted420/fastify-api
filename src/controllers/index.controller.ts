import { FastifyReply, FastifyRequest } from "fastify";
import { IndexModel } from "../index.model";

export const indexController = async (request: FastifyRequest, reply: FastifyReply) => {
    return { message: 'Welcome to the the Fastify API!' };
}

export const createIndexController = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        console.log(request.body);
        const newIndex = new IndexModel({
            name: 'Sample Index',
            description: 'This is a sample index description'
        });
        await newIndex.save();
        reply.status(201).send({ message: 'Index created successfully', index: newIndex });
    } catch (error) {
        console.error('Error creating index:', error);
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}