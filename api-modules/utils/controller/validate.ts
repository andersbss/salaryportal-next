import Joi from 'joi';
import { NextApiRequest } from 'next';
import { BadRequestError } from '../error';
import { controller } from './controller';

const formatErrorMessage = (error: Joi.ValidationError) => {
  const message = error.details.map((detail) => detail.message).join(', ');
  return message;
};

export const validate = (schema: Joi.Schema) =>
  controller(async (req: NextApiRequest) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        // Stops the controller from running in router.ts
        req.body = 'stop';
        throw new BadRequestError(formatErrorMessage(error));
      }
    }
  });
