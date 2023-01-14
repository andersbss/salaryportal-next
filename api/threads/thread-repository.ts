import ThreadModelSchema, { ThreadModel } from './thread-model';

const findById = async (id: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findById(id);
};

const findByUrlId = async (urlId: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOne({
    urlId,
  });
};

const create = async (thread: Omit<ThreadModel, 'id'>): Promise<ThreadModel> => {
  return ThreadModelSchema.create(thread);
};

const insertMany = async (threads: Omit<ThreadModel, 'id'>[]): Promise<ThreadModel[]> => {
  return ThreadModelSchema.insertMany(threads);
};

const findOneAndUpdateById = async (id: string, updatedModel: ThreadModel): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOneAndUpdate({ id }, updatedModel, { new: true });
};

export default {
  findById,
  findByUrlId,
  create,
  insertMany,
  findOneAndUpdateById,
};
