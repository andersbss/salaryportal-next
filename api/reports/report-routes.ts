import { Route, validate } from '@api/utils';

import { CreateReportInputSchema, DeleteReportInputSchema, GetReportByIdInputSchema } from './dto';

import ReportController from './report-controller';

export const reportRoutes: Route[] = [
  {
    route: '/api/reports/id',
    method: 'GET',
    controller: ReportController.getReportById,
    middlewares: [validate(GetReportByIdInputSchema)],
  },
  { route: '/api/reports/all', method: 'GET', controller: ReportController.getAllReports },
  {
    route: '/api/reports/create',
    method: 'POST',
    controller: ReportController.createReport,
    middlewares: [validate(CreateReportInputSchema)],
  },
  {
    route: '/api/reports/delete',
    method: 'DELETE',
    controller: ReportController.deleteReportById,
    middlewares: [validate(DeleteReportInputSchema)],
  },
  {
    route: '/api/reports/delete-all',
    method: 'DELETE',
    controller: ReportController.deleteAllReports,
  },
];
