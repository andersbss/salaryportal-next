import { trpc } from '@client/trpc';
import { useEffect } from 'react';

const StaticPage = () => {
  const { data, refetch } = trpc.reports.adminTest.useQuery(undefined, { enabled: false });

  useEffect(() => {
    refetch();
  });

  return (
    <div>
      <h1>Static page</h1>
      {data}
    </div>
  );
};

export default StaticPage;

export async function getStaticPaths() {
  // Fetch all threads from api

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  // Fetch thread from api and pass it to page

  return {
    props: {}, // will be passed to the page component as props
  };
}
