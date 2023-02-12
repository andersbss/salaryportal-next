import { controller, response } from '@api/utils';

import KartverketService from './kartverket-service';

const getCounties = controller(async (req, res) => {
  const counties = await KartverketService.getCounties();
  response(res, { status: 200, message: 'Counties found', data: counties });
});

export default {
  getCounties,
};
