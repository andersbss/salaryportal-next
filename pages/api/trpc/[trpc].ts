import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@server/trpc-router';

import { createContext } from '@server/utils/trpc';

// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
