import { TRPCError } from '@trpc/server';
import { KartverketCountiesResponse, GetKartverketCountiesInputSchema, kartverketMapper } from './dto';

const KARTVERKET_BASE_URL = 'https://ws.geonorge.no/kommuneinfo/v1';

const getCounties = async (): Promise<KartverketCountiesResponse> => {
  const path = '/fylker';

  const url = `${KARTVERKET_BASE_URL}${path}`;

  const res = await fetch(url);

  if (res.status !== 200) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Kartverket API error' });
  }

  const data = await res.json();

  const parsed = await GetKartverketCountiesInputSchema.parseAsync(data);

  return kartverketMapper.toResponseCounties(parsed);
};

export default {
  getCounties,
};
