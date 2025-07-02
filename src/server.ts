import { fastify, FastifyInstance } from "fastify";
import {indexRoute} from "./routes/index.route";
import mongoose from "mongoose";
import authenticate from "./middleware/auth.middleware";
const PORT = process.env.PORT || 3000;

const server: FastifyInstance = fastify({
  logger: true,
});

mongoose.connect("mongodb://localhost:27017/fastify-api",);

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});
server.register(indexRoute,  {prefix: "/api/v1"});
server.addHook("preHandler", authenticate);

const start = async () => {
  try {
    await server.listen({port: PORT as number});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();