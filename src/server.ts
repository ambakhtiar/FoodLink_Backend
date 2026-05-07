import { Server } from 'http';
import app from './app';
import prisma from './app/utils/prisma';
import setupCronJobs from './app/utils/cronJobs';

async function main() {
  // Initialize Cron Jobs
  setupCronJobs();

  const server: Server = app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.info('Server closed');
      });
    }
    process.exit(1);
  };

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    exitHandler();
  });

  process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    exitHandler();
  });
}

main().catch((err) => {
  console.error('Error starting server:', err);
  prisma.$disconnect();
  process.exit(1);
});
