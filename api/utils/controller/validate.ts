import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';
import { controller } from './controller';
import { response } from './response';

export const validate = (schema: Joi.Schema) =>
  controller(
    async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await schema.validateAsync(req.body);
      } catch (error) {
        if (error instanceof Joi.ValidationError) {
          console.error(error);
          throw new Error(error.message);
          //response(res, { status: 400 });
          //TODO: Handle error
        }
      }
    },
    { skipDbConnection: true }
  );
