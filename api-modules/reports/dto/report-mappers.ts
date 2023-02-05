import { Prisma, Report } from '@prisma/client';

import { CreateReportInput } from './report-input';
import { ReportResponse } from './report-response';
const toResponse = (model: Report): ReportResponse => {
  //TODO: Map more fields?
  return {
    id: model.id,
  };
};

const toCreateInput = (input: CreateReportInput): Prisma.ReportCreateInput => {
  // TODO: Fix workflow mapping

  throw new Error('Not implemented');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return {
    ...input,
  };
};

export default {
  toResponse,
  toCreateInput,
};
