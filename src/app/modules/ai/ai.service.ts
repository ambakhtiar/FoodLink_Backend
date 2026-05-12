import { GoogleGenerativeAI } from '@google/generative-ai';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import config from '../../config';
import prisma from '../../utils/prisma';

export type TGeneratedFoodDetails = {
  title: string;
  description: string;
  estimatedShelfLife: Date;
};

const generateFoodDetails = async (
  imageUrl: string,
  userTitle?: string,
  userDescription?: string,
): Promise<TGeneratedFoodDetails> => {
  const apiKey = config.gemini_api_key;
  if (!apiKey) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Gemini API key not configured',
    );
  }

  try {
    const imageResp = await fetch(imageUrl);
    if (!imageResp.ok) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to fetch image from URL',
      );
    }

    const imageBuffer = await imageResp.arrayBuffer();
    const base64 = Buffer.from(imageBuffer).toString('base64');
    const mimeType = imageResp.headers.get('content-type') || 'image/jpeg';

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let prompt =
      'Analyze this food image and return ONLY a JSON object with exactly these keys: "title" (string, max 5 words), "description" (string, 1-2 sentences), "estimatedShelfLife" (ISO 8601 date string). Do not include markdown, code blocks, or any extra text.';

    if (userTitle || userDescription) {
      prompt += '\n\nThe user provided some manual details for this food. Please enhance or incorporate these details based on the image, and only add what is missing or correct inaccuracies:';
      if (userTitle) prompt += `\nUser Title: "${userTitle}"`;
      if (userDescription) prompt += `\nUser Description: "${userDescription}"`;
    }
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64,
          mimeType,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    let jsonText = text.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.slice(7);
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.slice(3);
    }
    if (jsonText.endsWith('```')) {
      jsonText = jsonText.slice(0, -3);
    }
    jsonText = jsonText.trim();

    const parsed = JSON.parse(jsonText) as {
      title: string;
      description: string;
      estimatedShelfLife: string;
    };

    const estimatedShelfLife = new Date(parsed.estimatedShelfLife);
    if (isNaN(estimatedShelfLife.getTime())) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Invalid date returned from AI',
      );
    }

    await logAiAction('GENERATE_FOOD_DETAILS', prompt, text);

    return {
      title: parsed.title,
      description: parsed.description,
      estimatedShelfLife,
    };
  } catch (error) {
    console.error('AI Generation Error:', error);
    if (error instanceof AppError) throw error;
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      `AI generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};

const logAiAction = async (
  actionType: string,
  prompt: string,
  response: string,
): Promise<void> => {
  await prisma.aiLog.create({
    data: {
      actionType,
      prompt,
      response,
    },
  });
};

export const AiService = {
  generateFoodDetails,
  logAiAction,
};
