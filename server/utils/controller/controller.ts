import { NextApiRequest, NextApiResponse } from 'next';

import { ErrorLogService } from '@api/error-logs';

import { response } from './response';

import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '../error';

export const controller = (func: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // The actual controller function
      await func(req, res);
    } catch (error) {
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

      // Add more error types here..

      if (error instanceof InternalServerError || error instanceof Error) {
        response(res, { status: 500, message: 'Internal server error', error: error.message });

        try {
          await ErrorLogService.createErrorLog({ message: error.message, stack: error.stack || '' });
        } catch (errorLogError) {
          console.error(errorLogError);
          return;
        }

        return;
      }

      response(res, { status: 500, message: 'Internal server error' });
    }
  };
};
