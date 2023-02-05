import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const create = async (input: Prisma.ErrorLogCreateInput) => {
  const errorLog = await prisma.errorLog.create({ data: input });
  return errorLog;
};

export default {
  create,
};
