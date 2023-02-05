import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const findById = async (id: string) => {
  const thread = await prisma.thread.findUnique({
    where: { id },
  });
  return thread;
};

const findByUrlId = async (urlId: string) => {
  const thread = await prisma.thread.findUnique({
    where: { urlId },
  });
  return thread;
};

const create = async (input: Prisma.ThreadCreateInput) => {
  const thread = await prisma.thread.create({ data: input });
  return thread;
};

const createMany = async (input: Prisma.ThreadCreateInput[]) => {
  const threads = await prisma.thread.createMany({ data: input });
  return threads;
};

const findOneAndUpdateById = async (id: string, input: Prisma.ThreadUpdateInput) => {
  const thread = await prisma.thread.update({
    where: { id },
    data: input,
  });
  return thread;
};

const createComment = async (input: Prisma.CommentCreateInput) => {
  const comment = await prisma.comment.create({
    data: input,
  });
  return comment;
};

const createSubComment = async (commentId: string, input: Prisma.SubCommentCreateInput) => {
  const comment = await prisma.comment.update({
    where: { id: commentId },
    data: {
      subComments: {
        push: input,
      },
    },
  });

  return comment.subComments[comment.subComments.length - 1];
};

export default {
  findById,
  findByUrlId,
  create,
  createMany,
  findOneAndUpdateById,
  createComment,
  createSubComment,
};
