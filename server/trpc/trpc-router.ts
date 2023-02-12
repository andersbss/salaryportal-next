import { Gender } from '@prisma/client';
import { z } from 'zod';

import { kartverketService } from '@api/third-party/kartverket';

import { CreateReportInputSchema, reportService } from '@api/reports';

import { procedure as p, router as r } from './trpc';

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
    genders: p.query(() => Gender),
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
