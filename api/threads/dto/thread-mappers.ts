import { ThreadModel } from '../thread-model';

export const threadModelToThreadResponse = (model: ThreadModel) => {
  return {
    ...model,
  };
};
