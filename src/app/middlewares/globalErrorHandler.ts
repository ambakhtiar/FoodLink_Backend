import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import logger from '../utils/logger';
import { TErrorSources } from '../interface/error';
import handleZodError from '../errors/handleZodError';
import handlePrismaError from '../errors/handlePrismaError';
import AppError from '../utils/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    let message = err.message || 'Something went wrong!';
    let errorSources: TErrorSources = [
        {
            path: '',
            message: err.message || 'Something went wrong!',
        },
    ];

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        const simplifiedError = handlePrismaError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    } else if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
    }

    logger.error(message, {
        statusCode,
        stack: err.stack,
        path: _req.originalUrl,
        method: _req.method,
    });

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: process.env['NODE_ENV'] === 'development' ? err?.stack : null,
    });
};

export default globalErrorHandler;
