import cron from 'node-cron';
import prisma from './prisma';

import { PostStatus } from '@prisma/client';

const setupCronJobs = () => {
  // Run every hour at minute 0
  cron.schedule('0 * * * *', async () => {
    console.log('Running cron job: Expired Post Cleanup');
    try {
      const result = await prisma.post.updateMany({
        where: {
          status: {
            in: [PostStatus.AVAILABLE, PostStatus.PENDING_HANDOVER],
          },
          estimatedShelfLife: {
            lt: new Date(),
          },
        },
        data: {
          status: PostStatus.EXPIRED,
        },
      });

      if (result.count > 0) {
        console.log(`Successfully expired ${result.count} posts.`);
      }
    } catch (error) {
      console.error('Error in Expired Post Cleanup cron job:', error);
    }
  });
};

export default setupCronJobs;
