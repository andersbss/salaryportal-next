import { prisma, Prisma } from '@server/utils/prisma';

const create = async (input: Prisma.ErrorLogCreateInput) => {
  const errorLog = await prisma.errorLog.create({ data: input });
  return errorLog;
};

export default {
  create,
};
