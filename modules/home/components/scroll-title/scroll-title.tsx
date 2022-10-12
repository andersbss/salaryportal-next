import { Fragment } from 'react';
import styles from './scroll-title.module.scss';

const placegolderTitles = ['1test', '2test', '3test', '4test', '5test', '6test', '7test', '8test', '9test', '10test'];

export const ScrollTitle = (): JSX.Element => {
  return (
    <h1 className={styles.h1}>
      <div>
        <span className={styles.wrapper}>
          Hva tjener en &nbsp;
          <div className={styles.scroll}>
            <span>
              {placegolderTitles.map((title) => (
                <Fragment key={title}>
                  {title}
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
