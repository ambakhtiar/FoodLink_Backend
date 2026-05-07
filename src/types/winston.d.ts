/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'winston' {
    export interface Logger {
        info(message: string, meta?: unknown): void;
        error(message: string | Error, meta?: unknown): void;
        warn(message: string, meta?: unknown): void;
        debug(message: string, meta?: unknown): void;
        add(transport: Transport): void;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface Transport { }

    export namespace transports {
        export class Console implements Transport {
            constructor(opts?: { format?: Format });
        }
        export class File implements Transport {
            constructor(opts?: { filename?: string; format?: Format });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface Format { }

    export namespace format {
        export function combine(...formats: Format[]): Format;
        export function timestamp(opts?: { format?: string }): Format;
        export function printf<T = Record<string, unknown>>(
            template: (info: T) => string,
        ): Format;
        export function colorize(opts?: { all?: boolean }): Format;
        export function json(): Format;
        export function errors(opts?: { stack?: boolean }): Format;
    }

    export function createLogger(opts?: {
        level?: string;
        format?: Format;
        defaultMeta?: Record<string, unknown>;
        transports?: Transport[];
    }): Logger;
}
