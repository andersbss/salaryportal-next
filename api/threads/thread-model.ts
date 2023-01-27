import { Schema as MongooseSchema, model, models, Model } from 'mongoose';

// Sub comment
export type SubCommentModel = Omit<CommentModel, 'subComments'>;

const SubCommentSchema = new MongooseSchema<SubCommentModel>({
  content: {
    type: String,
    required: true,
  },
});

// Comment
export interface CommentModel {
  id: string;
  content: string;
  subComments: SubCommentModel[];
}

const CommentSchema = new MongooseSchema<CommentModel>({
  content: {
    type: String,
    required: true,
  },
  subComments: [SubCommentSchema],
});

// Discussion
export interface DiscussionModel {
  id: string;
  comments: CommentModel[];
}

const DiscussionSchema = new MongooseSchema<DiscussionModel>({
  comments: [CommentSchema],
});

// Thread
export interface ThreadModel {
  id: string;
  /** The identifier used to group reports into static pages */
  urlId: string;

  title: string;
  reports: string[];
  discussion: {
    comments: CommentModel[];
  };
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
  discussion: DiscussionSchema,
  reports: [
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Report',
    },
  ],
});

const ThreadModelSchema: Model<ThreadModel> = models.Thread || model<ThreadModel>('Thread', Schema);

export default ThreadModelSchema;
