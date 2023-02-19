import prismaClient from '@prisma/client';

import { publicProcedure, authenticatedProcedure } from '@server/utils/trpc';

import reportService from './report-service';
import { CreateReportInputSchema } from './dto';

const create = authenticatedProcedure
  .input(CreateReportInputSchema)
  .mutation(({ input, ctx }) => reportService.createReport(input, ctx.session.user.id));

const gender = publicProcedure.query(() => prismaClient.Gender);

const averageGrade = publicProcedure.query(() => prismaClient.AverageGrade);

const educationGrade = publicProcedure.query(() => prismaClient.EducationGrade);

const workLocation = publicProcedure.query(() => prismaClient.WorkLocation);

const workFlow = publicProcedure.query(() => prismaClient.WorkFlow);

const paymentInterval = publicProcedure.query(() => prismaClient.PaymentInterval);

const sector = publicProcedure.query(() => prismaClient.Sector);

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
