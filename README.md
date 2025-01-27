## Logger App

This TypeScript-based logging application provides a flexible and easy-to-use logger for web applications. It supports multiple log levels (verbose, info, warning, error) and is designed for maintainability and future extensibility.

### Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Testing](#testing)
- [Docker Instructions](#docker-instructions)
- [Design Patterns and Extensibility](#design-patterns-and-extensibility)
- [Future Enhancements](#future-enhancements)

### Features
- Supports multiple log levels: verbose, info, warning, and error.
- Singleton pattern ensures only one instance of the logger is created.
- Factory pattern for creating the logger instance.
- Easy to extend for future requirements such as logging to files.

### Project Structure

```
/app
│   Dockerfile
│   jest.config.js
│   package.json
│   tsconfig.json
│
└───src
│   │   index.ts
│   │   Logger.ts
│   │   LoggerFactory.ts
│   │   LogLevel.ts
│   │   ILogger.ts
│
└───tests
    │   Logger.test.ts
```

### Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/atul-007/logger.git
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Build the TypeScript code:**
   ```sh
   npm run build
   ```

4. **Run the application:**
   ```sh
   npm start
   ```

### Usage

To use the logger in your application, you can import the `LoggerFactory` and create a logger instance:

```typescript
import { LoggerFactory } from './LoggerFactory';

const logger = LoggerFactory.createLogger();

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");
```

### Testing

To ensure the `Logger` class functions correctly, Jest is used for testing.

#### Test Setup

1. **Install Jest and Related Dependencies:**
   ```sh
   npm install --save-dev jest @types/jest ts-jest
   ```

2. **Run the Tests:**
   ```sh
   npm test
   ```

### Docker Instructions

#### Building and Running the Docker Container

1. **Build the Docker image:**
   ```sh
   docker build -t logger-app .
   ```

2. **Run the Docker container:**
   ```sh
   docker run -d logger-app
   ```

This will build the Docker image and run the container in detached mode. The application will run inside the container, and you can see the logs output to the console.

### Design Patterns and Extensibility

1. **Singleton Pattern:** Ensures that only one instance of the Logger exists, making it easy to manage and control logging throughout the application.
2. **Factory Pattern:** `LoggerFactory` provides a clean way to create the logger instance, abstracting the creation logic and making it easier to manage dependencies or configurations in the future.
3. **Separation of Concerns:** By splitting the code into multiple files, we enhance maintainability and readability. Each file has a specific responsibility, making the system modular.
4. **Future Extensibility:** The `Logger` class can be extended to support logging to files or other outputs. For example, you could add methods to set different outputs or configurations without changing the existing codebase drastically.

### Future Enhancements

The current implementation logs directly to the console. Future enhancements could include:

- **Logging to Files:** Implement file logging by adding a file transport method.
- **Log Rotation:** Integrate log rotation to manage log file sizes.
- **Remote Logging:** Support sending logs to remote logging services.
- **Custom Formats:** Allow custom log formats to be defined by the user.

This design ensures that the logger is easy to use, maintainable, and flexible for future enhancements.