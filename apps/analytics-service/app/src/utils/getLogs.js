import fs from "fs";

const getLogs = ({ logFileLoc }) => {
  let logs = [];
  if (fs.existsSync(logFileLoc)) {
    try {
      const fileContent = fs.readFileSync(logFileLoc, "utf8");
      logs = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error parsing existing log file:", error);
    }
  }
  return logs
};

export default getLogs;
