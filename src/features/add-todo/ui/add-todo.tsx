import React, { useState } from 'react';
import { useStore } from '../../../app/providers/';
import styles from './styles.module.css';
import PlusIcon from './plus-icon';

export const AddTodo: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const { dispatch } = useStore();

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todoText });
    setTodoText('');
  };

  return (
    <form onSubmit={addTask} className={styles.form}>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Добавить новую задачу"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        <span>Создать</span>
        <PlusIcon />
      </button>
    </form>
  );
};
