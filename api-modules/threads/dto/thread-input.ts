import z from 'zod';

export const GetThreadByIdInputSchema = z.object({
  id: z.string(),
});
export type GetThreadByIdInput = z.infer<typeof GetThreadByIdInputSchema>;

export const GetThreadByUrlIdInputSchema = z.object({
  urlId: z.string(),
});
export type GetThreadByUrlIdInput = z.infer<typeof GetThreadByUrlIdInputSchema>;

export const CreateThreadDiscussionCommentInputSchema = z.object({
  threadId: z.string(),
  content: z.string(),
});
export type CreateThreadDiscussionCommentInput = z.infer<typeof CreateThreadDiscussionCommentInputSchema>;

export const CreateThreadDiscussionSubCommentInputSchema = z.object({
  threadId: z.string(),
  commentId: z.string(),
  content: z.string(),
});
export type CreateThreadDiscussionSubCommentInput = z.infer<typeof CreateThreadDiscussionSubCommentInputSchema>;
