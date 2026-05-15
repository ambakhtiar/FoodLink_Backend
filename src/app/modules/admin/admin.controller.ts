import { AccountStatus, UserRole, PostStatus, PostCategory, PostType } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService, TUserQueryParams, TOrgQueryParams, TPostQueryParams, TAdminQueryParams, TCreateAdminPayload } from './admin.service';

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
    const { page, limit, searchTerm, status, role, sortBy, sortOrder } = req.query as Record<string, string | undefined>;

    const params: TUserQueryParams = {
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : undefined,
        searchTerm: searchTerm || undefined,
        status: status as AccountStatus | undefined,
        role: role as UserRole | undefined,
        sortBy: sortBy as TUserQueryParams['sortBy'],
        sortOrder: sortOrder as 'asc' | 'desc' | undefined,
    };

    const result = await AdminService.getAllUsers(params);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Users retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});

const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
    const requestingUserId = req.user!.userId as string;
    const targetUserId = req.params['userId'] as string;
    const { status } = req.body as { status: AccountStatus };

    const result = await AdminService.updateUserStatus(requestingUserId, targetUserId, status);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User status updated successfully',
        data: result,
    });
});

const getAllOrganizations = catchAsync(async (req: Request, res: Response) => {
    const { page, limit, searchTerm, status, sortBy, sortOrder } = req.query as Record<string, string | undefined>;

    const params: TOrgQueryParams = {
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : undefined,
        searchTerm: searchTerm || undefined,
        status: status as AccountStatus | undefined,
        sortBy: sortBy as TOrgQueryParams['sortBy'],
        sortOrder: sortOrder as 'asc' | 'desc' | undefined,
    };

    const result = await AdminService.getAllOrganizations(params);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Organizations retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});

const updateOrgStatus = catchAsync(async (req: Request, res: Response) => {
    const orgId = req.params['orgId'] as string;
    const { status } = req.body as { status: AccountStatus };

    const result = await AdminService.updateOrgStatus(orgId, status);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Organization status updated successfully',
        data: result,
    });
});

const getAllPosts = catchAsync(async (req: Request, res: Response) => {
    const { page, limit, searchTerm, status, category, type, sortBy, sortOrder } = req.query as Record<string, string | undefined>;

    const params: TPostQueryParams = {
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : undefined,
        searchTerm: searchTerm || undefined,
        status: status as PostStatus | undefined,
        category: category as PostCategory | undefined,
        type: type as PostType | undefined,
        sortBy: sortBy || 'createdAt',
        sortOrder: (sortOrder === 'asc' ? 'asc' : 'desc') as 'asc' | 'desc',
    };

    const result = await AdminService.getAllPosts(params);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Posts retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});

const updatePostStatus = catchAsync(async (req: Request, res: Response) => {
    const postId = req.params['postId'] as string;
    const { status } = req.body as { status: PostStatus };

    const result = await AdminService.updatePostStatus(postId, status);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Post status updated successfully',
        data: result,
    });
});

const adminDeletePost = catchAsync(async (req: Request, res: Response) => {
    const postId = req.params['postId'] as string;
    await AdminService.adminDeletePost(postId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Post deleted successfully',
        data: null,
    });
});

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
    const { page, limit, searchTerm } = req.query as Record<string, string | undefined>;

    const params: TAdminQueryParams = {
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : undefined,
        searchTerm: searchTerm || undefined,
    };

    const result = await AdminService.getAllAdmins(params);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admins retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body as TCreateAdminPayload;
    const result = await AdminService.createAdmin(payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
});

export const AdminController = {
    getSystemStats,
    getAllUsers,
    updateUserStatus,
    getAllOrganizations,
    updateOrgStatus,
    getAllPosts,
    updatePostStatus,
    adminDeletePost,
    getAllAdmins,
    createAdmin,
};
