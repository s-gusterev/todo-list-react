import Header from '../../../widgets/header';
import { AddTodo } from '../../../features/add-todo';
import { TodoList } from '../../../widgets/todo-list';
import TodoStats from '../../../widgets/todo-stats';
import styles from './styles.module.css';
import FilterTodos from '../../../features/filter-todos/ui/filter-todos';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TodoStats />
        <AddTodo />
        <TodoList />
        <FilterTodos />
      </main>
    </>
  );
};

export default HomePage;
