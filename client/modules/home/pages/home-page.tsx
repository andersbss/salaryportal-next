import { NextPage } from 'next';
import Image from 'next/image';

import { routes } from '@globals/routes';

import { ScrollTitle } from '../components';
import { CtaButton } from '@ui/cta-button';

// Fetch job titles from API
const jobTitles = ['sosionom', 'lærer', 'snekker', 'sekretærer', 'sosionom'];

export const HomePage: NextPage = () => {
  return (
    <>
      <section className="flex flex-col py-5 sm:py-20">
        <div className="flex items-center justify-center">
          <div className="column flex flex-col items-center justify-center">
            <div>
              <ScrollTitle jobTitles={jobTitles} />
              <p className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400 sm:text-lg">
                Åpenhet og diskusjon rundt lønn i Norge! Her kan du diskutere lønn, goder og andre forhold i
                arbeidslivet.
              </p>
            </div>
          </div>
          <Image className="hidden md:block" src="/money.png" alt="" width={280} height={280} priority />
        </div>
        <div className="mt-16 mb-16 flex justify-center md:mt-4 md:mb-4">
          <CtaButton action={routes.reports.new()}>Oppgi lønn anonymt her!</CtaButton>
        </div>
        <div className="flex justify-center">
          <p className="max-w-xl text-sm text-gray-500 dark:text-gray-400 sm:text-lg">
            Vi trenger din hjelp for å skape bedre lønnsforhold i Norge! Du er selvfølgelig helt anonym.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
