import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong!';

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources: [
      {
        path: '',
        message: err.message,
      },
    ],
    stack: process.env['NODE_ENV'] === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
