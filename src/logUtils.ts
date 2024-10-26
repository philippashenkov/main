// src/logUtils.ts
import logger from './logger';

const logInfo = (message: string) => {
  logger.info(message);
};

const logError = (message: string) => {
  logger.error(message);
};

export { logInfo, logError };