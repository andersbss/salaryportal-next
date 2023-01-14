import { Route, validate } from '@api/utils';

import { GetThreadByIdInputSchema } from './dto';

import ThreadController from './thread-controller';

export const threadRoutes: Route[] = [
  {
    route: '/api/threads/id',
    method: 'GET',
    controller: ThreadController.getById,
    middlewares: [validate(GetThreadByIdInputSchema)],
  },
  {
    route: '/api/threads/url-id',
    method: 'GET',
    controller: ThreadController.getByUrlId,
    middlewares: [validate(GetThreadByIdInputSchema)],
  },
];
