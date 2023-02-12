import { InternalServerError } from '@server/utils';

import { KartverketCountiesResponse, GetKartverketCountiesInputSchema, kartverketMapper } from './dto';

const KARTVERKET_BASE_URL = 'https://ws.geonorge.no/kommuneinfo/v1';

const getCounties = async (): Promise<KartverketCountiesResponse> => {
  const path = '/fylker';

  const url = `${KARTVERKET_BASE_URL}${path}`;

  const res = await fetch(url);

  if (res.status !== 200) {
    throw new InternalServerError(`Failed to fetch counties from Kartverket: ${res.status}`);
  }

  const data = await res.json();

  const parsed = await GetKartverketCountiesInputSchema.parseAsync(data);

  return kartverketMapper.toResponseCounties(parsed);
};

export default {
  getCounties,
};
