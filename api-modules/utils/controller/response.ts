import { NextApiResponse } from 'next';

export interface Response<TResponse> {
  status: number;
  data?: TResponse;
  message?: string | null;
  error?: string | null;
}

export const response = <TResponse>(res: NextApiResponse, response: Response<TResponse>) => {
  const json: Response<TResponse | null> = {
    status: response.status,
    data: response.data || null,
    message: response.message || null,
    error: response.error || null,
  };

  res.status(response.status).json(json);
};
