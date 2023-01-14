import { NotFoundError } from '@api/utils';

import { ReportModel } from '../reports/report-model';

import { ThreadResponse, threadModelToThreadResponse, CreateThreadDiscussionCommentInput } from './dto';
import { ThreadModel } from './thread-model';

import ThreadRepository from './thread-repository';

// Public functions

const getThreadById = async (id: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.findById(id);

  if (!thread) {
    throw new NotFoundError(`Thread ${id} not found`);
  }

  return threadModelToThreadResponse(thread);
};

const getByUrlId = async (urlId: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.findByUrlId(urlId);

  if (!thread) {
    throw new NotFoundError(`Thread ${urlId} not found`);
  }

  return threadModelToThreadResponse(thread);
};

// Internal functions

/**
 * Creates or updates threads for a report based on the reports data
 */
const createOrUpdateMany = async (report: ReportModel): Promise<ThreadModel[]> => {
  // TODO: Check if thread already exists for the report
  // If it does, add it to the thread
  // If it doesn't, create a new thread

  // Also make logic for whats gonna be the best parameters for creating a new thread

  const threads = await ThreadRepository.insertMany([]);

  return [];
};

const createDiscussionComment = async (input: CreateThreadDiscussionCommentInput): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.findById(input.threadId);

  if (!thread) {
    throw new NotFoundError(`Thread ${input.threadId} not found`);
  }

  const updatedThread = await ThreadRepository.findOneAndUpdateById(input.threadId, {
    ...thread,
    discussion: {
      comments: [...thread.discussion.comments, { content: input.comment, subComments: [] }],
    },
  });

  if (!updatedThread) {
    throw new NotFoundError(`Updated thread ${input.threadId} not found`);
  }

  return threadModelToThreadResponse(updatedThread);
};

export default {
  getThreadById,
  getByUrlId,
  createOrUpdateMany,
  createDiscussionComment,
};
