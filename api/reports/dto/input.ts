import Joi from 'joi';

export type CreateReportInput = {
  title: string;
};

export const CreateReportInputSchema = Joi.object<CreateReportInput>({
  title: Joi.string().required(),
});
