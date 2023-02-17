import { prisma, Prisma } from '@server/utils/prisma';

const getById = async (id: string) => {
  const report = await prisma.report.findUnique({
    where: { id },
  });
  return report;
};

const create = async (input: Prisma.ReportCreateInput) => {
  const report = await prisma.report.create({ data: input });
  return report;
};

const getAll = async () => {
  const reports = await prisma.report.findMany();
  return reports;
};

const deleteById = async (id: string) => {
  const deleted = await prisma.report.delete({
    where: { id },
  });
  return deleted;
};

const deleteAll = async () => {
  const deleted = await prisma.report.deleteMany();
  return deleted;
};

export default {
  getById,
  create,
  getAll,
  deleteById,
  deleteAll,
};
