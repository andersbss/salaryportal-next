import ErrorLogModelSchema, { ErrorLogModel } from './error-log-model';

const create = async (input: Omit<ErrorLogModel, 'id'>): Promise<ErrorLogModel> => {
  console.log('hwello');
  return ErrorLogModelSchema.create<ErrorLogModel>(input);
};

export default {
  create,
};
