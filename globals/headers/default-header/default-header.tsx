import styles from './default-header.module.scss';

export const DefaultHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <a className={styles.link}>Hva tjener folk?</a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <div className={styles.secondary_items_wrapper}>
            <li className={styles.sign_up_li}>
              <a className={styles.link}>Registrer</a>
            </li>
            <li className={styles.sign_in_li}>
              <a className={styles.link}>Logg inn</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
