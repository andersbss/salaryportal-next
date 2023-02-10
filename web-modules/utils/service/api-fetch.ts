const BASE_URL = 'http://localhost:3000/api';

export const apiFetch = async <TResponse>(endpoint: string): Promise<TResponse> => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    try {
      const json = await response.json();

      if (json.message) {
        console.error(json.error);
        throw new Error(json.message);
      }
    } catch (error) {
      throw new Error(`Request failed with status ${response.status}`);
    }
  }

  const json = await response.json();

  return json.data as TResponse;
};
