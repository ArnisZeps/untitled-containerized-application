const createLogEntry = ({ data, date }) => {

  const logEntry = {
    timestamp: date.toISOString(),
    ...data
  }
  return logEntry;
};

export default createLogEntry;
