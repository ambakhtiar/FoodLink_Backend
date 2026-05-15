import { Server } from 'http';
import app from './app';
import logger from './app/utils/logger';
import prisma from './app/utils/prisma';
import setupCronJobs from './app/utils/cronJobs';

async function main() {
    // Initialize Cron Jobs
    setupCronJobs();
    const PORT = process.env['PORT'] || 5000;

    const server: Server = app.listen(PORT, () => {
        logger.info(`Server is running on http://localhost:${PORT}`);
        console.log(`Server is running on http://localhost:${PORT}`);
    });

    const exitHandler = () => {
        if (server) {
            server.close(() => {
                logger.info('Server closed');
            });
        }
        process.exit(1);
    };

    process.on('uncaughtException', (error) => {
        logger.error('Uncaught Exception:', error);
        exitHandler();
    });

    process.on('unhandledRejection', (error) => {
        logger.error('Unhandled Rejection:', error);
        exitHandler();
    });
}

main().catch((err) => {
    logger.error('Error starting server:', err);
    prisma.$disconnect();
    process.exit(1);
});
