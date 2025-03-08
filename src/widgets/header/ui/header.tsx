import { RocketIcon } from '../../../shared/ui/icons';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <RocketIcon />
      <h1 className={styles.title}>
        To<span className={styles.titleAccent}>do</span>
      </h1>
    </header>
  );
};

export default Header;
