import ThreadModelSchema, { ThreadModel, CommentModel, SubCommentModel } from './thread-model';

const findById = async (id: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findById(id);
};

const findByUrlId = async (urlId: string): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOne({
    urlId,
  });
};

const create = async (thread: Omit<ThreadModel, 'id'>): Promise<ThreadModel> => {
  return ThreadModelSchema.create(thread);
};

const insertMany = async (threads: Omit<ThreadModel, 'id'>[]): Promise<ThreadModel[]> => {
  return ThreadModelSchema.insertMany(threads);
};

const findOneAndUpdateById = async (id: string, updatedModel: ThreadModel): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOneAndUpdate({ id }, updatedModel, { new: true });
};

const findOneAndCreateDiscussionComment = async (
  id: string,
  comment: Omit<CommentModel, 'id'>
): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOneAndUpdate(
    { id },
    {
      $push: {
        'discussion.comments': comment,
      },
    },
    { new: true }
  );
};

const findOneAndCreateDiscussionSubComment = async (
  id: string,
  commentId: string,
  subComment: Omit<SubCommentModel, 'id'>
): Promise<ThreadModel | null> => {
  return ThreadModelSchema.findOneAndUpdate(
    { id, 'discussion.comments.id': commentId },
    {
      $push: {
        'discussion.comments.$.subComments': subComment,
      },
    },
    { new: true }
  );
};

export default {
  findById,
  findByUrlId,
  create,
  insertMany,
  findOneAndUpdateById,
  findOneAndCreateDiscussionComment,
  findOneAndCreateDiscussionSubComment,
};
