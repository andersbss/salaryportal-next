import { Prisma, User } from '@prisma/client';

import { CreateUserInput, UpdateUserInput } from './user-input';
import { UserResponse } from './user-response';

const toResponse = (model: User): UserResponse => {
  return {
    ...model,
  };
};

const toModelCreateInput = (input: CreateUserInput): Prisma.UserCreateInput => {
  return {
    ...input,
  };
};

const toModelUpdateInput = (input: UpdateUserInput, providerId: string): Prisma.UserUpdateInput => {
  const { ...rest } = input;
  return {
    ...rest,
    providerId,
  };
};

export default {
  toResponse,
  toModelCreateInput,
  toModelUpdateInput,
};
