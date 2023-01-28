import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ScrollTitle } from '../components';

// Fetch job titles from API
const jobTitles = ['sosionom', 'lærer', 'snekker', 'sekretærer', 'sosionom'];

export const HomePage: NextPage = () => {
  return (
    <>
      <section className="py-5 sm:py-20 flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center column">
            <div>
              <ScrollTitle jobTitles={jobTitles} />
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mt-2">
                Åpenhet og diskusjon rundt lønn i Norge! Her kan diskutere lønn, goder og andre forhold i arbeidslivet.
              </p>
            </div>
          </div>
          <Image className="hidden md:block" src="/money.png" alt="" width={300} height={300} priority />
        </div>
        <div className="flex justify-center mt-16 mb-16 md:mt-4 md:mb-4">
          <Link
            href="#"
            className="text-white hover:text-gray-100 bg-green-500 hover:bg-green-700 rounded-full shadow-md font-semibold text-xl p-4 transition ease-in duration-100"
          >
            Oppgi lønn anonymt her!
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
            Vi trenger din hjelp for å skape bedre lønnsforhold i Norge! All innsamlet blir selvfølgelig anonymisert.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
