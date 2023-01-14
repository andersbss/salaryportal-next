import ThreadModelSchema, { ThreadModel } from './thread-model';

const getById = async (id: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findById(id);
};

export default {
  getById,
};
