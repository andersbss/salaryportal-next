import styles from './default-layout.module.scss';
import { ReactNode } from 'react';
import { DefaultFooter } from '../../footers';
import { DefaultHeader } from '../../headers';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
