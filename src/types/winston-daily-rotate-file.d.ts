declare module 'winston-daily-rotate-file' {
    import { Transport } from 'winston';

    export interface DailyRotateFileTransportOptions {
        dirname?: string;
        filename?: string;
        datePattern?: string;
        zippedArchive?: boolean;
        maxSize?: string;
        maxFiles?: string;
        level?: string;
    }

    export default class DailyRotateFile implements Transport {
        constructor(options: DailyRotateFileTransportOptions);
    }

    export { DailyRotateFile };
}
