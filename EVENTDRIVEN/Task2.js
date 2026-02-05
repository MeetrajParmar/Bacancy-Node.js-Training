/*
Build a small logging system 
where different log levels (info, warn, error) are handled using events.
*/
import { EventEmitter } from "node:events";
import fs from "node:fs";

class Logger extends EventEmitter {
  info(message) {
    this.emit("info", message);
  }

  warn(message) {
    this.emit("warn", message);
  }

  error(message) {
    this.emit("error", message);
  }
}

const logger = new Logger();

logger.on("info", (msg) => {
  console.log(`[INFO] ${new Date().toLocaleString()} - ${msg}`);
});

logger.on("warn", (msg) => {
  console.log(`[WARN] ${new Date().toLocaleString()} - ${msg}`);
});

logger.on("error", (msg) => {
  const logMessage = `[ERROR] ${new Date().toLocaleString()} - ${msg}`;
  console.log(logMessage);

  fs.appendFileSync("error.log", logMessage + "\n");
});

export default logger;

logger.info("Server started successfully!");
logger.warn("Memory usage is getting high...");
logger.error("Database connection failed!");
