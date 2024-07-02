import { LoggerFactory } from './LoggerFactory';
import { LogLevel } from './LogLevel';

// Usage example
const logger = LoggerFactory.createLogger();

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");
