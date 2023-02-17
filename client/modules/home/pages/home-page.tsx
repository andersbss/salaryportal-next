import { NextPage } from 'next';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { routes } from '@client/globals/routes';
import { CtaButton } from '@client/ui/cta-button';

import { ScrollTitle } from '../components';

// Fetch job titles from API
const jobTitles = ['sosionom', 'lærer', 'snekker', 'sekretærer', 'sosionom'];

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex flex-col py-5 sm:py-20">
        <div className="flex items-center justify-center">
          <div className="column flex flex-col items-center justify-center">
            <div>
              <ScrollTitle jobTitles={jobTitles} />
              <p className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400 sm:text-lg">
                {t('home:mainParagraph')}
              </p>
            </div>
          </div>
          <Image className="hidden md:block" src="/money.png" alt="" width={280} height={280} priority />
        </div>
        <div className="mt-16 mb-16 flex justify-center md:mt-4 md:mb-4">
          <CtaButton action={routes.reports.new()}>{t('home:ctaButton')}</CtaButton>
        </div>
        <div className="flex justify-center">
          <p className="max-w-xl text-sm text-gray-500 dark:text-gray-400 sm:text-lg">{t('home:secondaryParagraph')}</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
