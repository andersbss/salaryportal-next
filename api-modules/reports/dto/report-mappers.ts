import { ThreadModel } from '../../threads/thread-model';

import { ReportModel } from '../report-model';

import { CreateReportInput } from './report-input';
import { ReportResponse } from './report-reponse';

export const reportModelToReportResponse = (model: ReportModel, threadModels: ThreadModel[] = []): ReportResponse => {
  return {
    id: model.id,
    title: model.jobTitle,
    addedToTheseThreads: threadModels.map((thread) => ({
      id: thread.id,
      urlId: thread.urlId,
      title: thread.title,
    })),
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
