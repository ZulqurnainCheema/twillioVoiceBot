import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

import { modelRoutes } from "./routes/modelRoutes.js";
import fastifyCors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import { campaignsRoutes } from "./routes/campaignRoutes.js";
import fastifyStatic from "@fastify/static";
import path from "path";
import { callsRoutes } from "./routes/callsRoutes.js";
import dotenv from "dotenv";
import { loggerOptions } from "./utils/logger.js";
import { logger } from "./utils/logger.js";
import { leadsRoutes } from "./routes/leadsRoutes.js";
import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";
import userRoutes from "./routes/userRoutes.js";
import fp from "fastify-plugin";
import authPlugin from "./plugins/authPlugin.js";
dotenv.config();
if (!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL");

const server = fastify({
  logger: loggerOptions,
  disableRequestLogging: false,
});

process.on("uncaughtException", (err) => {
  logger.error(`💥 Uncaught Exception, ${err}`);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error(` Unhandled Rejection ${reason}`);
});

const prisma = new PrismaClient();

server.register(fastifyCookie);
server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET,
});
server.register(authPlugin);
server.register(fastifyCors, {
  origin: [
    "http://egwwss4s0wgw48ok40occ8so.31.97.218.226.sslip.io",
    "http://cs4wc4s8080wgo8ow0woksg8.31.97.218.226.sslip.io",
  ], // exact origin, not '*'
  credentials: true, // Adjust this for production (e.g., specific origins)
  methods: ["GET", "POST", "OPTIONS"],
});
server.register(fastifyStatic, {
  root: path.resolve("./uploads/campaigns/"), // Directory to serve static files from
  prefix: "/uploads/campaigns/", // Optional: serve files from this path
});
server.register(fastifyMultipart, {
  attacktoBody: true, // Attach files to the body
  attachFieldsToBody: true, // Attach fields to the body
});
server.register(modelRoutes, { prefix: "/api/models" });
server.register(campaignsRoutes, { prefix: "/api/campaigns" });
server.register(callsRoutes, { prefix: "/api/calls" });
server.register(leadsRoutes, { prefix: "/api/leads" });
server.register(userRoutes, { prefix: "/api/users" });
// Register a simple route
server.get("/", async (request, reply) => {
  try {
    await prisma.$connect();
    logger.info("Connected to the database successfully");
    return { message: "Server is listening" };
  } catch (error) {
    server.log.error("Database connection failed:", error);
    return reply
      .status(500)
      .send({ error: "Failed to connect to the database" });
  }
});
server.get("/secure-audio", async (request, reply) => {
  const { url } = request.query;

  if (!url || !url.startsWith("https://api.twilio.com")) {
    return reply.status(400).send("Invalid or missing Twilio URL");
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
          ).toString("base64"),
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error("Twilio response error:", errorText);
      return reply.status(response.status).send(errorText);
    }

    const contentType = response.headers.get("content-type");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    reply
      .header("Content-Type", contentType)
      .header("Content-Length", buffer.length)
      .header("Content-Disposition", "attachment; filename=recording.mp3");

    return reply.send(buffer);
  } catch (err) {
    logger.error("Error fetching Twilio audio:", err.message);
    return reply.status(500).send("Server error");
  }
});

// Start the server
const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    logger.info(`Server is running at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
