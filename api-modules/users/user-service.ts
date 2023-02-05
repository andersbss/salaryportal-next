import { NotFoundError } from 'api-modules/utils';

import { userMapper, UserResponse, CreateUserInput, UpdateUserInput } from './dto';

import UserRepository from './user-repository';

const getByProviderId = async (providerId: string, options?: { internal?: boolean }): Promise<UserResponse | null> => {
  const user = await UserRepository.getByProviderId(providerId);

  if (!user) {
    if (options?.internal) {
      return null;
    }
    throw new NotFoundError(`User with providerId ${providerId} not found`);
  }

  return userMapper.toResponse(user);
};

const create = async (input: CreateUserInput): Promise<UserResponse> => {
  const user = await UserRepository.create(userMapper.toModelCreateInput(input));
  return userMapper.toResponse(user);
};

const update = async (input: UpdateUserInput, options?: { internal?: boolean }): Promise<UserResponse | null> => {
  const user = await UserRepository.getById(input.id);

  if (!user) {
    if (options?.internal) {
      return null;
    }
    throw new NotFoundError(`User with id ${input.id} not found`);
  }

  const updatedUser = await UserRepository.findOneAndUpdateById(
    input.id,
    userMapper.toModelUpdateInput(input, user.providerId)
  );

  if (!updatedUser) {
    throw new NotFoundError(`User with id ${input.id} not found`);
  }

  return userMapper.toResponse(updatedUser);
};

export default {
  getByProviderId,
  create,
  update,
};
