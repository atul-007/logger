import { Logger } from './Logger';

export class LoggerFactory {
    public static createLogger(): Logger {
        return Logger.getInstance();
    }
}
