import Joi from 'joi';

export type GetThreadByIdInput = {
  id: string;
};
export const GetThreadByIdInputSchema = Joi.object({
  id: Joi.string().required(),
});
