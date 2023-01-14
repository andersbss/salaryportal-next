import { ReportModel } from '../report-model';

import { CreateReportInput } from './report-input';
import { ReportResponse } from './report-reponse';

export const reportModelToReportResponse = (model: ReportModel): ReportResponse => {
  return {
    id: model.id,
    title: model.jobTitle,
  };
};

export const reportInputToReportModel = (input: CreateReportInput): Omit<ReportModel, 'id'> => {
  const { workFlow, ...rest } = input;

  // TODO: Fix workflow mapping

  return {
    ...rest,
    workFlow: 'fulltime',
  };
};
