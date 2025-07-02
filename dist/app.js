"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
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
const pluginOptions = {};
app.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, 'plugins'),
    options: pluginOptions
});
app.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, 'routes'),
    options: {
        prefix: '/api/v1',
    },
});
const start = async () => {
    try {
        await app.listen({ port: PORT });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=app.js.map