import { NotFoundError } from '@api/utils';

import { ThreadResponse, threadModelToThreadResponse } from './dto';

import ThreadRepository from './thread-repository';

const getThreadById = async (id: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.getById(id);

  if (!thread) {
    throw new NotFoundError(`Thread ${id} not found`);
  }

  return threadModelToThreadResponse(thread);
};

const getByUrlId = async (urlId: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.getByUrlId(urlId);

  if (!thread) {
    throw new NotFoundError(`Thread ${urlId} not found`);
  }

  return threadModelToThreadResponse(thread);
};

export default {
  getThreadById,
  getByUrlId,
};
