import { NextApiRequest, NextApiResponse } from 'next';
import { response } from './response';

export type Middleware = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export type Route = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  route: string;
  controller: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  middlewares?: Middleware[];
};

export const router = (routes: Route[]) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, url } = req;

    const route = routes.find((route) => {
      return route.method === method && route.route === url;
    });

    if (!route) {
      response(res, { status: 404, message: 'Route not found' });
      return;
    }

    if (route.middlewares) {
      for (const middleware of route.middlewares) {
        await middleware(req, res);
      }
    }

    // If the middleware has already sent a response, we don't want to call the controller
    if (route && req.body !== 'stop') {
      await route.controller(req, res);
      return;
    }
  };
};
