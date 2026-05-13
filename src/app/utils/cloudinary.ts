import { v2 as cloudinary } from 'cloudinary';
import httpStatus from 'http-status';
import config from '../config';
import AppError from './AppError';

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name as string,
  api_key: config.cloudinary_api_key as string,
  api_secret: config.cloudinary_api_secret as string,
});

const uploadImageToCloudinary = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: process.env['CLOUDINARY_UPLOAD_FOLDER'] || 'HelpShare',
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

/**
 * Deletes an image from Cloudinary using its public_id.
 */
const deleteImageFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete image from Cloudinary',
    );
  }
};

/**
 * Extracts the public_id from a standard Cloudinary URL.
 * URL format: https://res.cloudinary.com/cloud_name/image/upload/v12345/folder/id.jpg
 */
const extractPublicIdFromUrl = (url: string): string | null => {
  try {
    const regex = /\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/;
    const match = url.match(regex);
    return match?.[1] || null;
  } catch (error) {
    return null;
  }
};

const uploadMultipleImagesToCloudinary = async (fileBuffers: Buffer[]): Promise<string[]> => {
  const uploadPromises = fileBuffers.map((buffer) => uploadImageToCloudinary(buffer));
  return Promise.all(uploadPromises);
};

export { 
    uploadImageToCloudinary,
    uploadMultipleImagesToCloudinary,
    deleteImageFromCloudinary, 
    extractPublicIdFromUrl 
};
