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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const index_route_1 = require("./routes/index.route");
const mongoose_1 = __importDefault(require("mongoose"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
require("dotenv").config();
const autoload_1 = __importDefault(require("@fastify/autoload"));
const path_1 = require("path");
const PORT = process.env.PORT || 3000;
const app = (0, fastify_1.default)({
    logger: true,
});
mongoose_1.default.connect(process.env.MONGO_URI);
mongoose_1.default.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
mongoose_1.default.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
});
const pluginOptions = {
// Place your custom options the autoload plugin below here.
};
// app.register(AutoLoad, {
//   dir: join(__dirname, 'plugins'),
//   options: pluginOptions
// });
app.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, 'routes'),
    options: pluginOptions
});
app.register(index_route_1.indexRoute, { prefix: "/api/v1" });
app.addHook("preHandler", auth_middleware_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen({ port: PORT });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
start();
