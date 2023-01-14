import { NotFoundError } from '@api/utils';

import ThreadService from '../threads/thread-service';

import { CreateReportInput, ReportResponse, reportInputToReportModel, reportModelToReportResponse } from './dto';

import ReportRepository from './report-repository';

// Public functions

const getReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.getById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportResponse(report);
};

const createReport = async (input: CreateReportInput): Promise<ReportResponse> => {
  const report = await ReportRepository.create(reportInputToReportModel(input));

  // Creating threads for the report, if existing threads are found, they will be updated
  const threads = await ThreadService.createOrUpdateMany(report);

  return reportModelToReportResponse(report, threads);
};

const getAllReports = async (): Promise<ReportResponse[]> => {
  const reports = await ReportRepository.getAll();
  return reports.map((report) => reportModelToReportResponse(report));
};

const deleteReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.deleteById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportModelToReportResponse(report);
};

// Internal functions

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
