import { Fragment } from 'react';
import styles from './scroll-title.module.scss';

const placegolderTitles = ['systemutvikler', 'sosionom', 'sykepleier', 'systemutvikler'];

export const ScrollTitle = (): JSX.Element => {
  return (
    <h1 className={styles.h1}>
      <div>
        <span className={styles.wrapper}>
          <span className={styles.label}>Hva tjener en &nbsp;</span>
          <div className={styles.scroll}>
            <span className={styles.job_poisition}>
              {placegolderTitles.map((title) => (
                <Fragment key={title}>
                  {title}?
                  <br />
                </Fragment>
              ))}
            </span>
          </div>
        </span>
      </div>
    </h1>
  );
};

export default ScrollTitle;
