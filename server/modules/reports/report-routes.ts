import { router as r } from '@server/utils/trpc';

import reportProcedures from './report-procedures';

const reports = r({
  create: reportProcedures.create,

  enums: r({
    gender: reportProcedures.gender,
  }),
});

export default reports;
