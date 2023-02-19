import { router } from '@server/utils/trpc';

import reportProcedures from './report-procedures';

const reports = router({
  create: reportProcedures.create,

  enums: router({
    gender: reportProcedures.gender,
    averageGrade: reportProcedures.averageGrade,
    educationGrade: reportProcedures.educationGrade,
    workLocation: reportProcedures.workLocation,
    workFlow: reportProcedures.workFlow,
    paymentInterval: reportProcedures.paymentInterval,
    sector: reportProcedures.sector,
  }),

  authTest: reportProcedures.authTest,
});

export default reports;
