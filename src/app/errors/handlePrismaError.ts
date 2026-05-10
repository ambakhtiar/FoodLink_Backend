import { Prisma } from '@prisma/client';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handlePrismaError = (
  err: Prisma.PrismaClientKnownRequestError,
): TGenericErrorResponse => {
  let errorSources: TErrorSources = [];
  let statusCode = 400;
  let message = 'Database Error';

  if (err.code === 'P2002') {
    const target = (err.meta?.target as string[]) || ['unknown'];
    statusCode = 409;
    message = 'Duplicate Entry';
    errorSources = [
      {
        path: target.join('.'),
        message: `${target.join('.')} already exists`,
      },
    ];
  } else if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Record Not Found';
    errorSources = [
      {
        path: '',
        message: (err.meta?.cause as string) || 'Record does not exist',
      },
    ];
  } else {
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  }

  return {
    statusCode,
    message,
    errorSources,
  };
};

export default handlePrismaError;
