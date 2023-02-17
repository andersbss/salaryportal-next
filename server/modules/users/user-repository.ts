import { prisma, Prisma } from '@server/utils/prisma';

const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const getByProviderId = async (providerId: string) => {
  const user = await prisma.user.findUnique({
    where: { providerId },
  });
  return user;
};

const findOneAndUpdateById = async (id: string, input: Prisma.UserUpdateInput) => {
  const user = await prisma.user.update({
    where: { id },
    data: input,
  });
  return user;
};

const create = async (input: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({ data: input });
  return user;
};

export default {
  getById,
  getByProviderId,
  create,
  findOneAndUpdateById,
};
