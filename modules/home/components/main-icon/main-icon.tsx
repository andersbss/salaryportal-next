import styles from './main-icon.module.scss';
import Image from 'next/image';

export const MainIcon = (): JSX.Element => {
  return (
    <>
      <Image className={styles.image} height={400} width={400} src="/savings-icon.svg" />
    </>
  );
};
