import { NextApiResponse } from 'next';

export interface Response<TResponse> {
  status: number;
  data?: TResponse;
  message?: string | null;
  error?: string | null;
}

export const response = <TResponse>(res: NextApiResponse, reponse: Response<TResponse>) => {
  const json: Response<TResponse | null> = {
    status: reponse.status,
    data: reponse.data || null,
    message: reponse.message || null,
    error: reponse.error || null,
  };

  res.status(reponse.status).json(json);
};
