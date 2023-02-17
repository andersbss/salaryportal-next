import { procedure as p } from '@server/utils/trpc';

import kartverketService from './kartverket-service';

const counties = p.query(() => kartverketService.getCounties());

export default {
  counties,
};
