import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const getSystemStats = catchAsync(async (_req: Request, res: Response) => {
    const result = await AdminService.getSystemStats();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'System stats retrieved successfully',
        data: result,
    });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const page = parseInt(req.query['page'] as string) || 1;
    const limit = parseInt(req.query['limit'] as string) || 10;

    const result = await AdminService.getAllUsers(page, limit);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Users retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});

const verifyNGO = catchAsync(async (req: Request, res: Response) => {
    const userId = req.params['userId'] as string;
    const result = await AdminService.verifyNGO(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User verified successfully',
        data: result,
    });
});

const toggleBan = catchAsync(async (req: Request, res: Response) => {
    const userId = req.params['userId'] as string;
    const result = await AdminService.toggleBan(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User ${result.status === 'BANNED' ? 'banned' : 'unbanned'} successfully`,
        data: result,
    });
});

export const AdminController = {
    getSystemStats,
    getAllUsers,
    verifyNGO,
    toggleBan,
};
