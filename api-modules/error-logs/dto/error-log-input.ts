import Joi from 'joi';

export type ErrorLogInput = {
  message: string;
  stack: string;
};
export const ErrorLogInputSchema = Joi.object<ErrorLogInput>({
  message: Joi.string().required(),
  stack: Joi.string().required(),
});
