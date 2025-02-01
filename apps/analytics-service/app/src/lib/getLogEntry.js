const getLogEntry = ({ data, date }) => {

  let logEntry = `\n----------------------------------------\n`;

  logEntry += `timestamp: ${date.toISOString()}\n`;

  for (const [key, value] of Object.entries(data)) {
    logEntry += `${key}: ${value}\n`;
  }

  logEntry += `----------------------------------------`;

  return logEntry;
};

export default getLogEntry;
