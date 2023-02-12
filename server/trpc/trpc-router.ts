import { Gender as PrismaGender } from '@prisma/client';
import { z } from 'zod';

import { kartverketService } from '@server/modules/third-party/kartverket';

import { CreateReportInputSchema, reportService } from '@server/modules/reports';

import { procedure as p, router as r, inferRouterInputs, inferRouterOutputs } from './trpc';

export const appRouter = r({
  hello: p
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),

  reports: r({
    create: p.input(CreateReportInputSchema).mutation(({ input }) => reportService.createReport(input)),
  }),

  enums: r({
    gender: p.query(() => PrismaGender),
  }),

  thirdParty: r({
    kartverket: r({
      counties: p.query(() => kartverketService.getCounties()),
    }),
  }),

  // kartverket
});

// export type definition of API
export type AppRouter = typeof appRouter;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
