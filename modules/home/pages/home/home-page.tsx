import styles from './home-page.module.scss';

import { NextPage } from 'next';

import { MainIcon, ScrollTitle } from '../../components';

export const HomePage: NextPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.icon_section}>
        <MainIcon />
      </section>
      <section className={styles.title_section}>
        <ScrollTitle />
      </section>
      <section className={styles.input_section}>
        <div>Input field goes here</div>
      </section>
    </main>
  );
};

export default HomePage;
