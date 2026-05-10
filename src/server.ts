import { Server } from 'http';
import app from './app';
import logger from './app/utils/logger';
import prisma from './app/utils/prisma';
import setupCronJobs from './app/utils/cronJobs';

async function main() {
    // Initialize Cron Jobs
    setupCronJobs();

    const server: Server = app.listen(5000, () => {
        logger.info('Server is running on port 5000');
        console.log(`
            🚀 Server is running!
            📡 Port: 5000
            🔗 URL: http://localhost:5000
            ✨ Ready to handle requests
            `);
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
