import { Schema as MongooseSchema, model, models, Model } from 'mongoose';

type Comment = {
  content: string;
  subComments: Omit<Comment, 'subComments'>[];
};

export type ThreadDiscussionModel = {
  comments: Comment[];
};

export interface ThreadModel {
  id: string;
  /** The identifier used to group reports into static pages */
  urlId: string;

  title: string;
  reports: string[];
  discussion: ThreadDiscussionModel;
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
  discussion: {
    type: Object,
    required: false,
    default: {
      comments: [],
    },
  },
  reports: [
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Report',
    },
  ],
});

const ThreadModelSchema: Model<ThreadModel> = models.Thread || model<ThreadModel>('Thread', Schema);

export default ThreadModelSchema;
