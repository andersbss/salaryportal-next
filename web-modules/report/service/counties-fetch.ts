const ROOT = 'http://localhost:3000/api/third-party/kartverket';

import { KartverketCountiesResponse } from '@api/third-party/kartverket/dto';

export const getAllCounties = async (): Promise<KartverketCountiesResponse> => {
  const url = `${ROOT}/counties`;

  const response = await fetch(url);
  //TODO: Handle error
  return response.json();
};
