import styles from './scroll-title-animation.module.scss';
import useTranslation from 'next-translate/useTranslation';

type ScrollTitleProps = {
  jobTitles: string[];
};

export const ScrollTitle = ({ jobTitles }: ScrollTitleProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="mx-auto flex flex-col text-left text-3xl font-semibold text-slate-900 dark:text-white sm:text-5xl lg:flex-row lg:text-center">
        <span className="block pr-3">{t('home:mainTitle')}</span>
        <div className={styles['scrolling-words-container']}>
          <div className={styles['scrolling-words-box']}>
            <ul>
              {jobTitles.map((job, index) => {
                return (
                  <li className="flex text-3xl font-semibold sm:text-5xl" key={index}>
                    {job}?
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default ScrollTitle;
