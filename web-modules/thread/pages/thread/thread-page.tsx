type ThreadPageParams = {
  params: {
    id: string;
  };
};

export const generateStaticThreadParams = () => {
  // TODO: Fetch thread params from API
  return [{ id: '1' }, { id: '2' }];
};

const getThread = async ({ id }: ThreadPageParams['params']) => {
  //TODO: Fetch thread from API

  return {
    id,
  };
};

export const ThreadPage = async ({ params }: ThreadPageParams) => {
  const thread = await getThread(params);

  return <div>{thread.id}</div>;
};

export default ThreadPage;
