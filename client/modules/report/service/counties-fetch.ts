import { apiFetch } from '@client/utils';

import { KartverketCountiesResponse } from '@server/modules/third-party/kartverket/client';

const BASE_URL = '/third-party/kartverket';

export const getAllCounties = async (): Promise<KartverketCountiesResponse> => apiFetch(`${BASE_URL}/counties`);
export type GetAllCountiesReturn = Awaited<ReturnType<typeof getAllCounties>>;
