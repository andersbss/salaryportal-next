import { publicProcedure } from '@server/utils/trpc';

import kartverketService from './kartverket-service';

const counties = publicProcedure.query(() => kartverketService.getCounties());

export default {
  counties,
};
