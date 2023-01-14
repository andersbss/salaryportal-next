import { Schema as MongooseSchema, model, models, Model } from 'mongoose';

export interface ThreadModel {
  id: string;
  /** The identifier used to group reports into static pages */
  urlId: string;

  title: string;

  // TODO: Add more fields
}

const Schema = new MongooseSchema<ThreadModel>({
  urlId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const ThreadModelSchema: Model<ThreadModel> = models.Thread || model<ThreadModel>('Thread', Schema);

export default ThreadModelSchema;
