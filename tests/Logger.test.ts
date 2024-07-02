// tests/Logger.test.ts
import { LoggerFactory } from '../src/LoggerFactory';
import { LogLevel } from '../src/LogLevel';

describe('Logger', () => {
  let logger: ReturnType<typeof LoggerFactory.createLogger>;
  let consoleSpy: jest.SpyInstance;

  beforeAll(() => {
    logger = LoggerFactory.createLogger();
  });

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log a verbose message', () => {
    const message = 'This is a verbose message';
    logger.verbose(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(LogLevel.VERBOSE.toUpperCase()));
  });

  it('should log an info message', () => {
    const message = 'This is an info message';
    logger.info(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(LogLevel.INFO.toUpperCase()));
  });

  it('should log a warning message', () => {
    const message = 'This is a warning message';
    logger.warning(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(LogLevel.WARNING.toUpperCase()));
  });

  it('should log an error message', () => {
    const message = 'This is an error message';
    logger.error(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(LogLevel.ERROR.toUpperCase()));
  });

  it('should log with a timestamp', () => {
    const message = 'This is a test message';
    const now = new Date();
    const timestamp = now.toISOString();

    logger.info(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(timestamp.substring(0, 10)));
  });
});
