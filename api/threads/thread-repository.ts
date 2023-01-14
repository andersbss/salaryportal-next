import ThreadModelSchema, { ThreadModel } from './thread-model';

const getById = async (id: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findById(id);
};

const getByUrlId = async (urlId: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOne({
    urlId,
  });
};

export default {
  getById,
  getByUrlId,
};
