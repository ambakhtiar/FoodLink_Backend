import { UserRole, AccountStatus } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma';
import config from '../config';

const seedSuperAdmin = async () => {
    try {
        console.log('Seeding Super Admin...');

        const hashedPassword = await bcrypt.hash(
            config.superadmin_pass!,
            Number(config.bcrypt_salt_rounds) || 12
        );

        const superAdminData = {
            email: config.superadmin_email!,
            phone: config.superadmin_phone!,
            passwordHash: hashedPassword,
            role: UserRole.SUPER_ADMIN,
            status: AccountStatus.ACTIVE,
            isVerified: true,
            authProvider: 'local',
        };

        const user = await prisma.user.upsert({
            where: { email: superAdminData.email },
            update: superAdminData,
            create: superAdminData,
        });

        await prisma.adminProfile.upsert({
            where: { userId: user.id },
            update: {
                name: 'System Super Admin',
                department: 'Administration',
            },
            create: {
                userId: user.id,
                name: 'System Super Admin',
                department: 'Administration',
            },
        });

        console.log('Super Admin seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding Super Admin:', error);
        process.exit(1);
    }
};

seedSuperAdmin();
