// utils/logger.js
import pino from "pino";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

export const loggerOptions = {
  transport: {
    targets: [
      // 1️⃣ Pretty‑print to console in dev only
      {
        target: "pino-pretty",
        options: { colorize: true, translateTime: "SYS:standard" },
        level: "debug",
      },
      // 2️⃣ Always write structured JSON to a file
      {
        target: "pino/file",
        options: {
          mkdir: true, // create folders if needed
          destination: path.resolve(process.cwd(), "logs/app.log"),
        },
        level: "info", // change to "debug" if you want more verbose file logs
      },
    ].filter(Boolean),
  },
  redact: ["req.headers.authorization", "body.password"],
};

// If you need standalone logger too:
export const logger = pino(loggerOptions);
