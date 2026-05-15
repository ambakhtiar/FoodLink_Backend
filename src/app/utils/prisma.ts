import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import config from '../config';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const dbUrl = config.database_url;

if (!dbUrl) {
    console.error(
        'CRITICAL ERROR: DATABASE_URL is not defined in environment variables.'
    );
}

const adapter = new PrismaPg({ connectionString: dbUrl! });
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env['NODE_ENV'] !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
