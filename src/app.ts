import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { globalRateLimiter } from './app/middlewares/rateLimiter';
import router from './app/routes';

const app: Application = express();

// Trust Proxy for accurate client IPs
app.set('trust proxy', 1);

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: function (_origin, callback) {
      // Allow any origin
      callback(null, true);
    },
    credentials: true,
  })
);

// Global Rate Limiter
app.use(globalRateLimiter);

// Application routes
app.use('/api/v1', router);

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to HelpShare AI Backend!');
});

// Global Error Handler
app.use(globalErrorHandler);

// Not Found
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'API Not Found',
    errorSources: [
      {
        path: _req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
});

export default app;
