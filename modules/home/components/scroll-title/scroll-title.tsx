import styles from './scroll-title-animation.module.scss';

type ScrollTitleProps = {
  jobTitles: string[];
};

export const ScrollTitle = ({ jobTitles }: ScrollTitleProps): JSX.Element => {
  return (
    <div className="flex">
      <h1 className="flex flex-col lg:flex-row text-2xl sm:text-5xl font-semibold mx-auto text-left lg:text-center">
        <span className="block">eeee</span>
        <div className={styles['scrolling-words-container']}>
          <div className={styles['scrolling-words-box']}>
            <ul>
              {jobTitles.map((job, index) => {
                return (
                  <li className="flex text-2xl sm:text-5xl font-semibold border" key={index}>
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
