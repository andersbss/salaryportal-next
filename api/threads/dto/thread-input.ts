import Joi from 'joi';

export type GetThreadByIdInput = {
  id: string;
};
export const GetThreadByIdInputSchema = Joi.object({
  id: Joi.string().required(),
});

export type GetThreadByUrlIdInput = {
  urlId: string;
};
export const GetThreadByUrlIdInputSchema = Joi.object({
  urlId: Joi.string().required(),
});
