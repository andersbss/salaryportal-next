import { router as r } from '@server/utils/trpc';

import reportProcedures from './report-procedures';

const reports = r({
  create: reportProcedures.create,

  enums: r({
    gender: reportProcedures.gender,
    averageGrade: reportProcedures.averageGrade,
    educationGrade: reportProcedures.educationGrade,
  }),
});

export default reports;
