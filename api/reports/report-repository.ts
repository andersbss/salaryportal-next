import ReportModelSchema, { ReportModel } from './report-model';

const getById = async (id: string): Promise<ReportModel | null> => {
  return ReportModelSchema.findById(id);
};

const create = async (input: Omit<ReportModel, 'id'>): Promise<ReportModel> => {
  const report = await ReportModelSchema.create<ReportModel>(input);
  return report;
};

const getAll = async (): Promise<ReportModel[]> => {
  const reports = await ReportModelSchema.find();
  return reports;
};

const deleteByid = async (id: string): Promise<ReportModel> => {
  const report = await ReportModelSchema.findByIdAndDelete(id);
  return report;
};

const deleteAll = async (): Promise<void> => {
  await ReportModelSchema.deleteMany();
};

export default {
  getById,
  create,
  getAll,
  deleteByid,
  deleteAll,
};
