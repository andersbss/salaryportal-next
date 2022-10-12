import styles from './default-footer.module.scss';

export const DefaultFooter = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div>&copy; 2022 Anders Strandseter</div>
    </footer>
  );
};

export default DefaultFooter;
