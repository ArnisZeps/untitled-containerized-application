import fs from "fs";
import path from "path";
import createLogEntry from "./utils/createLogEntry.js";
import getLogs from "./utils/getLogs.js";
const logger = ({ logGroup, timestamp, data }) => {
  const date = new Date(timestamp);
  const year = String(date.getUTCFullYear());
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");

  const logDir = path.join("logs", logGroup, year, month, day, hour);
  const logFile = path.join(logDir, `logs_${hour}.json`);

  const logs = getLogs({ logFileLoc: logFile });
  logs.push(createLogEntry({ date, data }));
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
};

export default logger;
