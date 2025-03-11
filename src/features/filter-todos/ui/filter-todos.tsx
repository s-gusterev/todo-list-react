import { useStore } from '../../../app/providers';
import styles from './styles.module.css';
import clsx from 'clsx';

const FilterTodos: React.FC = () => {
  const { dispatch, state } = useStore();

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className={styles.filter}>
      <button
        className={clsx(styles.button, {
          [styles.active]: state.filter === 'all',
        })}
        onClick={() => handleFilterChange('all')}
      >
        Все
      </button>
      <button
        className={clsx(styles.button, {
          [styles.active]: state.filter === 'active',
        })}
        onClick={() => handleFilterChange('active')}
      >
        Активные
      </button>
      <button
        className={clsx(styles.button, {
          [styles.active]: state.filter === 'completed',
        })}
        onClick={() => handleFilterChange('completed')}
      >
        Завершенные
      </button>
    </div>
  );
};

export default FilterTodos;
