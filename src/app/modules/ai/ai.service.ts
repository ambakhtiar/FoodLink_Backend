import prisma from '../../utils/prisma';

export type TGeneratedFoodDetails = {
  title: string;
  description: string;
  estimatedShelfLife: Date;
};

const generateFoodDetails = async (
  imageUrl: string,
): Promise<TGeneratedFoodDetails> => {
  // Mocked AI vision call — replace with actual Gemini/OpenAI fetch when ready
  const mockPrompt = `Analyze this food image and return JSON with title, description, and estimatedShelfLife (ISO 8601). Image URL: ${imageUrl}`;

  const mockResponse = {
    title: 'Fresh Vegetable Salad',
    description:
      'A healthy mix of fresh vegetables including lettuce, tomatoes, cucumbers, and carrots.',
    estimatedShelfLife: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  };

  await logAiAction(
    'GENERATE_FOOD_DETAILS',
    mockPrompt,
    JSON.stringify(mockResponse),
  );

  return mockResponse;
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
