import fs from "fs";
import path from "path";
import getLogEntry from "./lib/getLogEntry.js";

const logger = ({ logGroup, timestamp, data }) => {
  const date = new Date(timestamp);
  const year = String(date.getUTCFullYear());
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");

  const logDir = path.join("logs", logGroup, year, month, day, hour);
  const logFile = path.join(logDir, `logs_${hour}.log`);

  let logEntry = getLogEntry({ date, data })
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error("Error writing log:", err);
  });
};

export default logger;
