import { controller, response } from '@api/utils';

export const createReport = controller(async (req, res) => {
  response(res, { status: 200, message: 'Report created' });
});

export const getAllReports = controller(async (req, res) => {
  response(res, { status: 200, message: 'Report fetched' });
});
