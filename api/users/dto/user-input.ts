export type CreateUserInput = {
  providerId: string;
  email: string;
  username: string;
  imageUrl: string | null;
};

export type UpdateUserInput = {
  id: string;
  email: string;
  username: string;
  imageUrl: string | null;
};
