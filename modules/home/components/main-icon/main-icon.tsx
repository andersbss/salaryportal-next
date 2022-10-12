import styles from './main-icon.module.scss';
import Image from 'next/image';

export const MainIcon = (): JSX.Element => {
  return (
    <>
      <Image className={styles.image} height={500} width={500} src="/savings-icon.svg" />
    </>
  );
};
