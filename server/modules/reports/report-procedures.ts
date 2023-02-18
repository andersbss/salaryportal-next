import prismaClient from '@prisma/client';

import { procedure as p } from '@server/utils/trpc';

import reportService from './report-service';
import { CreateReportInputSchema } from './dto';

const create = p.input(CreateReportInputSchema).mutation(({ input }) => reportService.createReport(input));

const gender = p.query(() => prismaClient.Gender);

const averageGrade = p.query(() => prismaClient.AverageGrade);

const educationGrade = p.query(() => prismaClient.EducationGrade);

const workLocation = p.query(() => prismaClient.WorkLocation);

const workFlow = p.query(() => prismaClient.WorkFlow);

const paymentInterval = p.query(() => prismaClient.PaymentInterval);

const sector = p.query(() => prismaClient.Sector);

export default {
  create,
  gender,
  averageGrade,
  educationGrade,
  workLocation,
  workFlow,
  paymentInterval,
  sector,
};
