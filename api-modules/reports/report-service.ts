import { NotFoundError } from '@api/utils';

import { reportMapper, CreateReportInput, ReportResponse } from './dto';

import ReportRepository from './report-repository';

// Public functions

const getReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.getById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportMapper.toResponse(report);
};

const createReport = async (input: CreateReportInput): Promise<ReportResponse> => {
  const report = await ReportRepository.create(reportMapper.toCreateInput(input));

  return reportMapper.toResponse(report);
};

const getAllReports = async (): Promise<ReportResponse[]> => {
  const reports = await ReportRepository.getAll();
  return reports.map((report) => reportMapper.toResponse(report));
};

const deleteReportById = async (id: string): Promise<ReportResponse> => {
  const report = await ReportRepository.deleteById(id);

  if (!report) {
    throw new NotFoundError(`Report ${id} not found`);
  }

  return reportMapper.toResponse(report);
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
