import { Gender as PrismaGender } from '@prisma/client';

import { procedure as p } from '@server/utils/trpc';

import reportService from './report-service';
import { CreateReportInputSchema } from './dto';

const create = p.input(CreateReportInputSchema).mutation(({ input }) => reportService.createReport(input));

const gender = p.query(() => PrismaGender);

export default {
  create,
  gender,
};
