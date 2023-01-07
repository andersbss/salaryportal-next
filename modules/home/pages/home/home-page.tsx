import styles from './home-page.module.scss';

import { NextPage } from 'next';

import { NewReportForm } from '@modules/report';

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
        <NewReportForm />
      </section>
    </main>
  );
};

export default HomePage;
