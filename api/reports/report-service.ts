import { NotFoundError } from '@api/utils';

import { CreateReportInput, ReportResponse, reportInputToReportModel, reportModelToReportResponse } from './dto';

import ReportRepository from './report-repository';

const getReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.getById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportResponse(report);
};

const createReport = async (input: CreateReportInput): Promise<ReportResponse> => {
  const report = await ReportRepository.create(reportInputToReportModel(input));
  return reportModelToReportResponse(report);
};

const getAllReports = async (): Promise<ReportResponse[]> => {
  const reports = await ReportRepository.getAll();
  return reports.map(reportModelToReportResponse);
};

const deleteReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.deleteById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportResponse(report);
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
