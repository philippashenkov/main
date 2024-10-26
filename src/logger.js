// src/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: './src/logs/combined.log' }),
    new winston.transports.File({ filename: './src/logs/error.log', level: 'error' }),
  ],
});

export default logger;