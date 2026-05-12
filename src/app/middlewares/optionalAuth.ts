import { AccountStatus, UserRole } from '../../generated/prisma';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import prisma from '../utils/prisma';

const optionalAuth = async (req: Request, _res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return next();
    }

    const accessToken = token.split(' ')[1];
    if (!accessToken) {
        return next();
    }

    try {
        const decoded = jwt.verify(
            accessToken,
            config.jwt_access_secret as string,
        ) as JwtPayload;

        const { userId } = decoded;

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (user && user.status !== AccountStatus.BANNED) {
            req.user = decoded as JwtPayload & {
                userId: string;
                role: UserRole;
                status: AccountStatus;
            };
        }
    } catch (_error) {
        // Ignore errors for optional auth
    }

    next();
};

export default optionalAuth;
