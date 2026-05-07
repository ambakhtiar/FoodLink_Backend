import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

import auth from '../../middlewares/auth';

const router = Router();

router.post(
    '/register',
    validateRequest(AuthValidation.registerValidationSchema),
    AuthController.registerUser,
);

router.post(
    '/login',
    validateRequest(AuthValidation.loginValidationSchema),
    AuthController.loginUser,
);

router.get('/me', auth(), AuthController.getMeHandler);

router.patch(
    '/change-password',
    auth(),
    validateRequest(AuthValidation.changePasswordSchema),
    AuthController.changePassword,
);

router.post(
    '/forgot-password',
    validateRequest(AuthValidation.forgotPasswordSchema),
    AuthController.forgotPassword,
);

router.post(
    '/verify-otp',
    validateRequest(AuthValidation.verifyOtpSchema),
    AuthController.verifyOtp,
);

router.post(
    '/reset-password',
    validateRequest(AuthValidation.resetPasswordSchema),
    AuthController.resetPassword,
);

router.post(
    '/google',
    validateRequest(AuthValidation.googleLoginSchema),
    AuthController.googleLogin,
);

export const AuthRoutes = router;
