import { NextPage } from 'next';

type Params = {
  id: string;
};

export const generateStaticParams = () => {
  // TODO: Fetch thread params from API
  return [{ id: '1' }, { id: '2' }];
};

const getThread = async ({ id }: Params) => {
  //TODO: Fetch thread from API

  return {
    id,
  };
};

const Thread = async ({ params }: { params: Params }) => {
  const thread = await getThread(params);

  return <div>{thread.id}</div>;
};

export default Thread;
