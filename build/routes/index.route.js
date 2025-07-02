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
exports.indexRoute = void 0;
const index_controller_1 = require("../controllers/index.controller");
const indexRoute = (fastify, opts, done) => __awaiter(void 0, void 0, void 0, function* () {
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
    }, index_controller_1.indexController);
    fastify.post('/create', index_controller_1.createIndexController);
    done();
});
exports.indexRoute = indexRoute;
