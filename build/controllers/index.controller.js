"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIndexController = exports.indexController = void 0;
const index_model_1 = require("../index.model");
const indexController = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return { message: 'Welcome to the the Fastify API!' };
});
exports.indexController = indexController;
const createIndexController = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(request.body);
        const newIndex = new index_model_1.IndexModel({
            name: 'Sample Index',
            description: 'This is a sample index description'
        });
        yield newIndex.save();
        reply.status(201).send({ message: 'Index created successfully', index: newIndex });
    }
    catch (error) {
        console.error('Error creating index:', error);
        reply.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.createIndexController = createIndexController;
