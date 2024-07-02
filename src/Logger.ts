//import the LogLevel enum and the ILogger
import { LogLevel } from './LogLevel';    //LogLevel is used to specify the level of logging 
import { ILogger } from './ILogger';      //ILogger defines the contract for the Logger class

//A Logger class that implements the ILogger interface.
class Logger implements ILogger {

    //This static property holds the single instance of the Logger class.
    // It ensures that there is only one instance of the Logger throughout the application (Singleton pattern).
    private static instance: Logger;


    // The constructor is marked private to prevent direct instantiation of the class from outside.
    // This enforces the use of the getInstance method to obtain the single instance of the Logger.
    private constructor() { }


    // This static method checks if an instance of the Logger already exists.
    // If not, it creates a new instance. This method ensures that only one instance of the Logger is created and returned.
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }


    // This method takes a log level and a message as parameters.
    // It generates a timestamp for when the log is created and logs the message to the console in a formatted string.
    // The log level is converted to uppercase for consistency.
    public log(level: LogLevel, message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }

    // This method logs a message with the "verbose" log level.
    // It calls the log method with `LogLevel.VERBOSE` and the provided message.
    public verbose(message: string): void {
        this.log(LogLevel.VERBOSE, message);
    }

    // This method logs a message with the "info" log level.
    // It calls the log method with `LogLevel.INFO` and the provided message.
    public info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    // This method logs a message with the "warning" log level. 
    // It calls the log method with `LogLevel.WARNING` and the provided message.
    public warning(message: string): void {
        this.log(LogLevel.WARNING, message);
    }

    // This method logs a message with the "error" log level. 
    // It calls the log method with LogLevel.ERROR and the provided message.
    public error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }
}

export { Logger };
