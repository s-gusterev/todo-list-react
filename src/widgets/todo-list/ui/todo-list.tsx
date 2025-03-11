import React from 'react';
import { useStore } from '../../../app/providers/use-store';
import { TodoItem } from '../../../entities/todo/ui/todo-item';
import EmptyTodoList from './empty-todo-list';
import styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { filterTodos } from '../../../features/filter-todos';

export const TodoList: React.FC = () => {
  const { state } = useStore();

  const todos = filterTodos(state);

  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        {todos.length > 0 ? (
          <motion.ul
            className={styles.list}
            key={state.filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence initial={false} mode="sync">
              {todos.map((todo) => (
                <motion.li
                  key={todo.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className={styles.item}
                >
                  <TodoItem todo={todo} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <motion.div key={state.filter}>
            <EmptyTodoList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
