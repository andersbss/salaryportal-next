import { NotFoundError } from '@api/utils';

import {
  userModelToUserResponse,
  userCreateInputToUserModel,
  UserResponse,
  CreateUserInput,
  UpdateUserInput,
  userUpdateInputToUserModel,
} from './dto';

import UserRepository from './user-repository';

const getByProviderId = async (providerId: string, options?: { internal?: boolean }): Promise<UserResponse | null> => {
  const user = await UserRepository.getByProviderId(providerId);

  if (!user) {
    if (options?.internal) {
      return null;
    }
    throw new NotFoundError(`User with providerId ${providerId} not found`);
  }

  return userModelToUserResponse(user);
};

const create = async (input: CreateUserInput): Promise<UserResponse> => {
  const user = await UserRepository.create(userCreateInputToUserModel(input));
  return userModelToUserResponse(user);
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
    userUpdateInputToUserModel(input, user.providerId)
  );

  if (!updatedUser) {
    throw new NotFoundError(`User with id ${input.id} not found`);
  }

  return userModelToUserResponse(updatedUser);
};

export default {
  getByProviderId,
  create,
  update,
};
