import { router as r, inferRouterInputs, inferRouterOutputs } from './utils/trpc';

import { kartverketRoutes } from '@server/modules/third-party/kartverket';

import { reportRoutes } from '@server/modules/reports';

export const appRouter = r({
  reports: reportRoutes,

  thirdParty: r({
    kartverket: kartverketRoutes,
  }),
});

export type AppRouter = typeof appRouter;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
