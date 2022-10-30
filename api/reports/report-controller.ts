import { controller, response } from '@api/utils';

import { CreateReportInput, DeleteReportInput, GetReportByIdInput } from './dto';

import ReportService from './report-service';

const getReportById = controller(async (req, res) => {
  const input = req.body as GetReportByIdInput;

  const report = await ReportService.getReportById(input.id);

  response(res, { status: 200, message: 'Report found', data: report });
});

const createReport = controller(async (req, res) => {
  const input = req.body as CreateReportInput;

  const report = await ReportService.createReport(input);

  response(res, { status: 200, message: 'Report created', data: report });
});

const getAllReports = controller(async (req, res) => {
  const reports = await ReportService.getAllReports();
  response(res, { status: 200, message: 'Reports found', data: reports });
});

const deleteReportById = controller(async (req, res) => {
  const input = req.body as DeleteReportInput;
  const report = await ReportService.deleteReportById(input.id);
  response(res, { status: 200, message: 'Report deleted', data: report });
});

const deleteAllReports = controller(async (req, res) => {
  const reports = await ReportService.deleteAllReports();
  response(res, { status: 200, message: 'All reports deleted', data: reports });
});

export default {
  getReportById,
  createReport,
  getAllReports,
  deleteReportById,
  deleteAllReports,
};
