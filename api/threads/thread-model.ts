import { Schema as MongooseSchema, model, models } from 'mongoose';

export interface ThreadModel {
  id: string;
  title: string;
  // TODO: Add more fields
}

const Schema = new MongooseSchema<ThreadModel>({
  title: {
    type: String,
    required: true,
  },
});

const ThreadModelSchema = models.Thread || model<ThreadModel>('Thread', Schema);

export default ThreadModelSchema;
