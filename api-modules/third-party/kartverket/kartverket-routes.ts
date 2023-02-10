import { Route } from '@api/utils';

import KartverketController from './kartverket-controller';

export const kartverketRoutes: Route[] = [
  {
    route: '/api/third-party/kartverket/counties',
    method: 'GET',
    controller: KartverketController.getCounties,
  },
];
