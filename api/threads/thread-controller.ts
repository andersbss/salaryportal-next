import { controller, response } from '@api/utils';

import { GetThreadByIdInput, GetThreadByUrlIdInput } from './dto/thread-input';

import ThreadService from './thread-service';

const getById = controller(async (req, res) => {
  const input = req.body as GetThreadByIdInput;

  const thread = await ThreadService.getThreadById(input.id);

  response(res, { status: 200, message: 'Thread found', data: thread });
});

const getByUrlId = controller(async (req, res) => {
  const input = req.body as GetThreadByUrlIdInput;

  const thread = await ThreadService.getByUrlId(input.urlId);

  response(res, { status: 200, message: 'Thread found', data: thread });
});

export default {
  getById,
  getByUrlId,
};
