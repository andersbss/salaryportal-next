import { Thread } from '@prisma/client';

import { ThreadResponse } from './thread-response';

const toResponse = (model: Thread): ThreadResponse => {
  //TODO: Implement

  return {
    id: model.id,
    title: model.title,
  };
};

export default {
  toResponse,
};
