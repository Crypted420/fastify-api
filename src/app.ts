import fastify, { FastifyInstance } from "fastify"
import mongoose from "mongoose";
import authenticate from "./middleware/auth.middleware";
require("dotenv").config();
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { join } from 'path';

const PORT = process.env.PORT || 3000;

const app: FastifyInstance = fastify({
  logger: true,
});

mongoose.connect(process.env.MONGO_URI as string);

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

const pluginOptions: Partial<AutoloadPluginOptions> = {
  // Place your custom options the autoload plugin below here.
}
app.register(AutoLoad, {
  dir: join(__dirname, 'plugins'),
  options: pluginOptions
});

app.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
  options: {
    prefix: '/api/v1',
  },
});

const start = async () => {
  try {
    await app.listen({port: PORT as number});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();