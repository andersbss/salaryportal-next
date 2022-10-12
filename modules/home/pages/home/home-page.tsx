import styles from './home-page.module.scss';

import { NextPage } from 'next';

import { MainIcon } from '../../components';

export const HomePage: NextPage = () => {
  return (
    <main className={styles.main}>
      <section>
        <MainIcon />
      </section>
      <section>
        <h1>Hva tjener en __?</h1>
      </section>
      <section>
        <div>Input field goes here</div>
      </section>
    </main>
  );
};

export default HomePage;
