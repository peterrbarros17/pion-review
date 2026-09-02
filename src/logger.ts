import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

if (!process.env.VERCEL) {
  logger.add(new transports.File({ filename: "error.log", level: "error" }));
  logger.add(new transports.File({ filename: "combined.log" }));
}

export default logger;
