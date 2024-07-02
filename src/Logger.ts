import { LogLevel } from './LogLevel';
import { ILogger } from './ILogger';

class Logger implements ILogger {
    private static instance: Logger;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(level: LogLevel, message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }

    public verbose(message: string): void {
        this.log(LogLevel.VERBOSE, message);
    }

    public info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    public warning(message: string): void {
        this.log(LogLevel.WARNING, message);
    }

    public error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }
}

export { Logger };
