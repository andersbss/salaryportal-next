import { NextApiRequest, NextApiResponse } from 'next';

import { response } from './response';

import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '../error';
import { connectDB } from '../mongo';

export const controller = (
  func: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
  options?: {
    skipDbConnection?: boolean;
  }
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Connect to MongoDB
      if (!options?.skipDbConnection) {
        await connectDB();
      }

      // The actual controller function
      await func(req, res);
    } catch (error) {
      //TODO: Log error to db
      console.log(error);

      if (error instanceof BadRequestError) {
        response(res, { status: 400, message: 'Bad request error', error: error.message });
        return;
      }

      if (error instanceof UnauthorizedError) {
        response(res, { status: 401, message: 'Unauthorized error', error: error.message });
        return;
      }

      if (error instanceof NotFoundError) {
        response(res, { status: 404, message: 'Not found error', error: error.message });
        return;
      }

      if (error instanceof InternalServerError) {
        response(res, { status: 500, message: 'Internal server error', error: error.message });
        return;
      }

      if (error instanceof Error) {
        response(res, { status: 500, message: 'Internal server error', error: error.message });
        return;
      }

      response(res, { status: 500, message: 'Internal server error' });
    }
  };
};
