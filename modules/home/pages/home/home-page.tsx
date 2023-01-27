import { NextPage } from 'next';

import { NewReportForm } from '@modules/report';

import { ScrollTitle } from '../../components';
import { TmpAuth } from '../../components/tmp-auth/tmp-auth';

export const HomePage: NextPage = () => {
  // Fetch job titles from API
  const jobTitles = ['1', '2', '3', '4', '1'];

  return (
    <main className="max-w-7xl rounded-xl mx-auto border">
      <section className="py-5 sm:py-20">
        <ScrollTitle jobTitles={jobTitles} />
      </section>
      <section>
        <NewReportForm />
      </section>
      <TmpAuth />
    </main>
  );
};

export default HomePage;
