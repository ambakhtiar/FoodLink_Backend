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
const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    process.env.BACKEND_URL || 'http://localhost:5000',
].filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (mobile apps, Postman, etc.)
            if (!origin) return callback(null, true);

            // Check if origin is in allowedOrigins or matches Vercel preview pattern
            const isAllowed =
                allowedOrigins.includes(origin) ||
                /^https:\/\/next-blog-client.*\.vercel\.app$/.test(origin) ||
                /^https:\/\/.*\.vercel\.app$/.test(origin); // Any Vercel deployment

            if (isAllowed) {
                callback(null, true);
            } else {
                callback(new Error(`Origin ${origin} not allowed by CORS`));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
        exposedHeaders: ['Set-Cookie'],
    }),
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
