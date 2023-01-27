import UserModelSchema, { UserModel } from './user-model';

const getById = async (id: string): Promise<UserModel | null> => {
  return UserModelSchema.findById(id);
};

const getByProviderId = async (providerId: string): Promise<UserModel | null> => {
  return UserModelSchema.findOne({ providerId });
};

const create = async (input: Omit<UserModel, 'id'>): Promise<UserModel> => {
  const user = await UserModelSchema.create<Omit<UserModel, 'id'>>(input);
  return user;
};

const findOneAndUpdateById = async (id: string, updatedModel: Omit<UserModel, 'id'>): Promise<UserModel | null> => {
  return UserModelSchema.findOneAndUpdate({ id }, updatedModel, { new: true });
};

export default {
  getById,
  getByProviderId,
  create,
  findOneAndUpdateById,
};
