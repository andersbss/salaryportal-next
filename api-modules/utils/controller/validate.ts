import { AnyZodObject, ZodError } from 'zod';
import { NextApiRequest } from 'next';
import { BadRequestError, InternalServerError } from '../error';
import { controller } from './controller';

const formatErrorMessages = (error: ZodError): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const errors = error.flatten()?.fieldErrors;
      const keys = Object.keys(errors);

      const formatted = keys
        .map((key) => {
          return `${key}: ${errors[key]?.map((error) => error).join(', ')}`;
        })
        .join(', ');

      resolve(formatted);
    } catch (error) {
      reject(error);
    }
  });
};

export const validate = (schema: AnyZodObject) =>
  controller(async (req: NextApiRequest) => {
    try {
      const data = await schema.parseAsync(req.body);
      req.body = data;
    } catch (error) {
      // Stops the controller from running in router.ts
      req.body = 'stop';

      // Handle zod errors
      if (error instanceof ZodError) {
        throw new BadRequestError(await formatErrorMessages(error));
      }

      // Something else went wrong
      throw new InternalServerError('Something went wrong');
    }
  });
