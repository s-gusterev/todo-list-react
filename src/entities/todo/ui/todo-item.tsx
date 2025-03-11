import React, { useState } from 'react';
import { Todo } from '../model';
import { useStore } from '../../../app/providers';
import styles from './styles.module.css';
import { toast } from 'react-toastify';
import DeleteIcon from './delete-icon';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [isChanged, setIsChanged] = useState(false);

  const handleSave = () => {
    if (!isChanged) {
      setIsEditing(false);
      return;
    }

    if (!newText.trim()) {
      toast.error('Текст задачи не может быть пустым!');
      return;
    }

    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: newText } });
    setIsEditing(false);
    setIsChanged(false);
    toast.success('Задача успешно обновлена!');
  };

  const handleBlur = () => {
    if (!newText.trim()) {
      setNewText(todo.text);
      toast.error('Текст задачи не может быть пустым!');
    } else {
      handleSave();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedText = e.target.value;
    setNewText(updatedText);
    setIsChanged(updatedText.trim() !== todo.text);
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
    toast.success('Задача удалена!');
  };

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        className={styles.checkbox}
        id={`checkbox-${todo.id}`}
      />
      <label htmlFor={`checkbox-${todo.id}`} className={styles.label}></label>
      {isEditing ? (
        <input
          value={newText}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
          className={styles.editInput}
          required
        />
      ) : (
        <span className={styles.text} onClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}
      <button onClick={handleDelete} className={styles.button}>
        <DeleteIcon />
      </button>
    </div>
  );
};
