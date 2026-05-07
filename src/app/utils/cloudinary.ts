import { v2 as cloudinary } from 'cloudinary';
import httpStatus from 'http-status';
import AppError from './AppError';

cloudinary.config({
  cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
  api_key: process.env['CLOUDINARY_API_KEY'],
  api_secret: process.env['CLOUDINARY_API_SECRET'],
});

const uploadImageToCloudinary = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: process.env['CLOUDINARY_UPLOAD_FOLDER'] || 'FoodLink',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          return reject(
            new AppError(
              httpStatus.INTERNAL_SERVER_ERROR,
              `Cloudinary upload failed: ${error.message}`,
            ),
          );
        }
        if (!result) {
          return reject(
            new AppError(
              httpStatus.INTERNAL_SERVER_ERROR,
              'Cloudinary upload returned no result',
            ),
          );
        }
        resolve(result.secure_url);
      },
    );
    stream.end(fileBuffer);
  });
};

export { uploadImageToCloudinary };
