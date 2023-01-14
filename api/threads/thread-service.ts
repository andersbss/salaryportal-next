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

export default {
  getThreadById,
};
