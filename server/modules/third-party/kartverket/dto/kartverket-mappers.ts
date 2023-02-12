import { GetKartverketCountiesInput } from './kartverket-input';
import { KartverketCountiesResponse } from './kartverket-response';

const toResponseCounties = (rawData: GetKartverketCountiesInput): KartverketCountiesResponse => {
  return rawData.map((county) => {
    return {
      name: county.fylkesnavn,
      id: county.fylkesnummer,
    };
  });
};

export default {
  toResponseCounties,
};
