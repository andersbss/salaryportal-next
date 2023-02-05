import { controller, response } from 'api-modules/utils';

import {
  CreateThreadDiscussionCommentInput,
  CreateThreadDiscussionSubCommentInput,
  GetThreadByIdInput,
  GetThreadByUrlIdInput,
} from './dto/thread-input';

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

/*
const createDiscussionComment = controller(async (req, res) => {
  const input = req.body as CreateThreadDiscussionCommentInput;

  const thread = await ThreadService.createDiscussionComment(input);

  response(res, { status: 200, message: 'Thread found', data: thread });
});

const createDiscussionSubComment = controller(async (req, res) => {
  const input = req.body as CreateThreadDiscussionSubCommentInput;

  const thread = await ThreadService.createDiscussionSubComment(input);

  response(res, { status: 200, message: 'Thread found', data: thread });
});
*/

export default {
  getById,
  getByUrlId,
};
