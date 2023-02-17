import { router as r } from '@server/utils/trpc';

import kartverketProcedures from './kartverket-procedures';

const kartverket = r({
  counties: kartverketProcedures.counties,
});

export default kartverket;
