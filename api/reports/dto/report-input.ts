import Joi from 'joi';

export type GetReportByIdInput = {
  id: string;
};
export const GetReportByIdInputSchema = Joi.object({
  id: Joi.string().required(),
});

export type CreateReportInput = {
  title: string;
};
export const CreateReportInputSchema = Joi.object<CreateReportInput>({
  title: Joi.string().required(),
});

export type DeleteReportInput = {
  id: string;
};
export const DeleteReportInputSchema = Joi.object<DeleteReportInput>({
  id: Joi.string().required(),
});
