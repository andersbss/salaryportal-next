import {
  Gender as PrismaGender,
  AverageGrade as PrismaAverageGrade,
  EducationGrade as PrismaEducationGrade,
} from '@prisma/client';

import { procedure as p } from '@server/utils/trpc';

import reportService from './report-service';
import { CreateReportInputSchema } from './dto';

const create = p.input(CreateReportInputSchema).mutation(({ input }) => reportService.createReport(input));

const gender = p.query(() => PrismaGender);

const averageGrade = p.query(() => PrismaAverageGrade);

const educationGrade = p.query(() => PrismaEducationGrade);

export default {
  create,
  gender,
  averageGrade,
  educationGrade,
};
