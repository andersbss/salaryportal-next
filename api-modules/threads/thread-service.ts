import { NotFoundError } from 'api-modules/utils';

import { threadMapper, ThreadResponse } from './dto';

import ThreadRepository from './thread-repository';

// Public functions

const getThreadById = async (id: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.findById(id);

  if (!thread) {
    throw new NotFoundError(`Thread ${id} not found`);
  }

  return threadMapper.toResponse(thread);
};

const getByUrlId = async (urlId: string): Promise<ThreadResponse> => {
  const thread = await ThreadRepository.findByUrlId(urlId);

  if (!thread) {
    throw new NotFoundError(`Thread ${urlId} not found`);
  }

  return threadMapper.toResponse(thread);
};

// Internal functions

/*

Creates or updates threads for a report based on the reports data

const createOrUpdateMany = async (report: ReportModel): Promise<ThreadModel[]> => {
  // TODO: Check if thread already exists for the report
  // If it does, add it to the thread
  // If it doesn't, create a new thread

  // Also make logic for whats gonna be the best parameters for creating a new thread

  const threads = await ThreadRepository.insertMany([]);

  return [];
};
*/

export default {
  getThreadById,
  getByUrlId,
};
