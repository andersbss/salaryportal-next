import { NotFoundError } from '@api/utils';

import { CreateReportInput, ReportResponse, reportInputToReportModel, reportModelToReportReponse } from './dto';

import ReportRepository from './report-repository';

const getReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.getById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportReponse(report);
};

const createReport = async (input: CreateReportInput): Promise<ReportResponse> => {
  const report = await ReportRepository.create(reportInputToReportModel(input));
  return reportModelToReportReponse(report);
};

const getAllReports = async (): Promise<ReportResponse[]> => {
  const reports = await ReportRepository.getAll();
  return reports.map(reportModelToReportReponse);
};

const deleteReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.deleteByid(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportReponse(report);
};

const deleteAllReports = async (): Promise<ReportResponse[]> => {
  const reports = await getAllReports();
  await ReportRepository.deleteAll();
  return reports;
};

export default {
  getReportById,
  createReport,
  getAllReports,
  deleteReportById,
  deleteAllReports,
};
