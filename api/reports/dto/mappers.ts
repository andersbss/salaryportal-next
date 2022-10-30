import { ReportModel } from '../report-model';

import { CreateReportInput } from './report-input';
import { ReportResponse } from './report-reponse';

export const reportModelToReportReponse = (report: ReportModel): ReportResponse => {
  return {
    id: report.id,
    title: report.title,
  };
};

export const reportInputToReportModel = (input: CreateReportInput): Omit<ReportModel, 'id'> => {
  return {
    title: input.title,
  };
};
