import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1', router);

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to FoodLink AI Backend!');
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
