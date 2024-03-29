import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import type { AppRouter, RouterInput, RouterOutput } from '@server/trpc-router';

export type { AppRouter };
export type { RouterInput };
export type { RouterOutput };

const getBaseUrl = () => {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        //transformer: superjson, // optional - adds superjson serialization
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
        queryClientConfig: {
          defaultOptions: {
            mutations: {
              retry: false,
            },
            queries: {
              retry: false,
            },
          },
        },
      };
    }
    return {
      //transformer: superjson, // optional - adds superjson serialization
      links: [
        httpBatchLink({
          // The server needs to know your app's full url
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * Set custom request headers on every request from tRPC
           * @link https://trpc.io/docs/v10/header
           */
          headers() {
            if (ctx?.req) {
              // To use SSR properly, you need to forward the client's headers to the server
              // This is so you can pass through things like cookies when we're server-side rendering
              // If you're using Node 18, omit the "connection" header
              const {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                connection: _connection,
                ...headers
              } = ctx.req.headers;
              return {
                ...headers,
                // Optional: inform server that it's an SSR request
                'x-ssr': '1',
              };
            }
            return {};
          },
        }),
      ],
    };
  },
  ssr: true,
});
