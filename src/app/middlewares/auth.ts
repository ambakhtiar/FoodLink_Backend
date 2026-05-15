import { AccountStatus, UserRole } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../utils/AppError';
import catchAsync from '../utils/catchAsync';
import prisma from '../utils/prisma';

const auth = (...requiredRoles: UserRole[]) => {
    return catchAsync(
        async (req: Request, _res: Response, next: NextFunction) => {
            const token = req.headers.authorization;

            // Check if token exists
            if (!token) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
            }

            // Extract Bearer token
            const accessToken = token.split(' ')[1];

            if (!accessToken) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid token format');
            }

            // Verify token
            let decoded;
            try {
                decoded = jwt.verify(
                    accessToken,
                    config.jwt_access_secret as string,
                ) as JwtPayload;
            } catch (_error) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or expired token');
            }

            const { userId, role } = decoded;

            // Check if user still exists
            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                throw new AppError(httpStatus.NOT_FOUND, 'User does not exist');
            }

            // Check if user is banned
            if (user.status === AccountStatus.BANNED) {
                throw new AppError(httpStatus.FORBIDDEN, 'User is banned');
            }

            // Role check
            if (requiredRoles.length && !requiredRoles.includes(role)) {
                throw new AppError(
                    httpStatus.FORBIDDEN,
                    'You have no access to this resource',
                );
            }

            // Attach user to request
            req.user = decoded as JwtPayload & {
                userId: string;
                role: UserRole;
                status: AccountStatus;
                needsPasswordChange: boolean;
            };
            next();
        },
    );
};

export default auth;
