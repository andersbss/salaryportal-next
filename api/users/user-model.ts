import { Schema as MongooseSchema, model, models, Model } from 'mongoose';

export interface UserModel {
  id: string;
  providerId: string;
  email: string;
  username: string;
  imageUrl: string | null;
}

const Schema = new MongooseSchema<UserModel>({
  providerId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String || null,
    required: false,
  },
});

const UserModelSchema: Model<UserModel> = models.User || model<UserModel>('User', Schema);

export default UserModelSchema;
