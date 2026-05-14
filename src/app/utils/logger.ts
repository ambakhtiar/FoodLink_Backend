import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const { combine, timestamp, printf, colorize, json, errors } = format;

const logDir = path.join(process.cwd(), 'logs');

interface ILogInfo {
    level: string;
    message: unknown;
    timestamp?: string;
    stack?: string | undefined;
}

const consoleFormat = printf<ILogInfo>((info: ILogInfo) => {
    const safeMessage =
        typeof info.message === 'object' && info.message !== null
            ? JSON.stringify(info.message, null, 2)
            : String(info.message ?? '');

    const ts = info.timestamp ?? new Date().toISOString();
    const stackSuffix = info.stack ? `\n${String(info.stack)}` : '';

    return `${ts} [${info.level}]: ${safeMessage}${stackSuffix}`;
});

const dailyRotateFileOptions = {
    dirname: logDir,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
};

const transportsList: any[] = [];

// Always add console transport for Vercel and production environments to capture logs
if (process.env['NODE_ENV'] === 'production' || process.env['VERCEL'] === '1') {
    transportsList.push(
        new transports.Console({
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                errors({ stack: true }),
                json(),
            ),
        })
    );
} else {
    // Local development can use files and pretty console
    transportsList.push(
        new transports.Console({
            format: combine(
                colorize({ all: true }),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                errors({ stack: true }),
                consoleFormat,
            ),
        }),
        new DailyRotateFile({
            ...dailyRotateFileOptions,
            filename: 'success-%DATE%.log',
            level: 'info',
        }),
        new DailyRotateFile({
            ...dailyRotateFileOptions,
            filename: 'error-%DATE%.log',
            level: 'error',
        })
    );
}

const logger = createLogger({
    level: process.env['NODE_ENV'] === 'production' ? 'info' : 'debug',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        json(),
    ),
    defaultMeta: { service: 'helpshare-backend' },
    transports: transportsList,
});

export default logger;
