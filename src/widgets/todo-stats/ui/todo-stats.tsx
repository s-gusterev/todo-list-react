import styles from './styles.module.css';
import { useStore } from '../../../app/providers';
import { AnimatePresence, motion } from 'framer-motion';
const TodoStats = () => {
  const { state } = useStore();
  const totalTasks = state.todos.length;
  const completedTasks = state.todos.filter((todo) => todo.completed).length;

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <div className={styles.stats}>
      <div className={styles.created}>
        <span>Созданные задачи</span>
        <div className={styles.count}>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span key={totalTasks} {...animation}>
              {totalTasks}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.completed}>
        <span>Завершенные</span>
        <div className={styles.count}>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={`completedTasks ${completedTasks}`}
              {...animation}
            >
              {completedTasks}
            </motion.span>
            <span> из </span>
            <motion.span key={`totalTasks ${totalTasks}`} {...animation}>
              {totalTasks}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
