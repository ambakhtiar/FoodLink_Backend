import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    NODE_ENV: process.env['NODE_ENV'],
    port: process.env['PORT'] || 5000,
    database_url: process.env['DATABASE_URL'],
    bcrypt_salt_rounds: process.env['BCRYPT_SALT_ROUNDS'] || 12,
    jwt_access_secret: process.env['JWT_ACCESS_SECRET'] || 'secret',
    jwt_access_expires_in: process.env['JWT_ACCESS_EXPIRES_IN'] || '15m',
    jwt_refresh_secret: process.env['JWT_REFRESH_SECRET'] || 'refresh_secret',
    jwt_refresh_expires_in: process.env['JWT_REFRESH_EXPIRES_IN'] || '30d',
    cloudinary_cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
    cloudinary_api_key: process.env['CLOUDINARY_API_KEY'],
    cloudinary_api_secret: process.env['CLOUDINARY_API_SECRET'],
    cloudinary_upload_folder:
        process.env['CLOUDINARY_UPLOAD_FOLDER'] || 'HelpShare',
    gemini_api_key: process.env['GEMINI_API_KEY'],
    google_client_id: process.env['GOOGLE_CLIENT_ID'],
    smtp_host: process.env['SMTP_HOST'],
    smtp_port: process.env['SMTP_PORT'] || 587,
    smtp_user: process.env['SMTP_USER'],
    smtp_pass: process.env['SMTP_PASS'],
    superadmin_email: process.env['SUPERADMIN_EMAIL'],
    superadmin_phone: process.env['SUPERADMIN_PHONE'],
    superadmin_pass: process.env['SUPERADMIN_PASS'],
};
