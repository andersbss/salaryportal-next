import { UserModel } from '../user-model';
import { CreateUserInput, UpdateUserInput } from './user-input';
import { UserResponse } from './user-response';

export const userModelToUserResponse = (model: UserModel): UserResponse => {
  return {
    ...model,
  };
};

export const userCreateInputToUserModel = (input: CreateUserInput): Omit<UserModel, 'id'> => {
  return {
    ...input,
  };
};

export const userUpdateInputToUserModel = (input: UpdateUserInput, providerId: string): Omit<UserModel, 'id'> => {
  const { ...rest } = input;
  return {
    ...rest,
    providerId,
  };
};
