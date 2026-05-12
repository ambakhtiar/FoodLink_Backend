import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { globalRateLimiter } from './app/middlewares/rateLimiter';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

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
