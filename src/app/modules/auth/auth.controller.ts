import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const registerUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.registerUser({
        ...req.body,
        passwordHash: req.body.password,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...userWithoutPassword } = result;

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User registered successfully',
        data: userWithoutPassword,
    });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.loginUser({
        email: req.body.email,
        passwordHash: req.body.password,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        data: result,
    });
});

const getMeHandler = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user.userId;
    const result = await AuthService.getMe(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User profile retrieved successfully',
        data: result,
    });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const { currentPassword, newPassword } = req.body;

    await AuthService.changePassword(userId, currentPassword, newPassword);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Password changed successfully',
        data: null,
    });
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.body;

    await AuthService.forgotPassword(email);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OTP sent to email successfully',
        data: null,
    });
});

const verifyOtp = catchAsync(async (req: Request, res: Response) => {
    const { email, otp } = req.body;

    await AuthService.verifyOtp(email, otp);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OTP verified successfully',
        data: null,
    });
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
    const { email, otp, newPassword } = req.body;

    await AuthService.resetPassword(email, otp, newPassword);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Password reset successfully',
        data: null,
    });
});

const googleLogin = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.googleLogin(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Google login successful',
        data: result,
    });
});

export const AuthController = {
    registerUser,
    loginUser,
    getMeHandler,
    changePassword,
    forgotPassword,
    verifyOtp,
    resetPassword,
    googleLogin,
};
