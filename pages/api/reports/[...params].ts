import { router, Route, validate } from '@api/utils';

import { getAllReports, createReport, CreateReportInputSchema } from '@api/reports';

const routes: Route[] = [
  { route: '/api/reports/all', method: 'GET', controller: getAllReports },
  {
    route: '/api/reports/create',
    method: 'POST',
    controller: createReport,
    middlewares: [validate(CreateReportInputSchema)],
  },
];

export default router(routes);
