import { State, Action } from './model';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo_list';

// Функция загрузки из localStorage
const loadTodos = (): State => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData
    ? { todos: JSON.parse(storedData), filter: 'all' }
    : { todos: [], filter: 'all' };
};

// Начальное состояние
export const initialState: State = loadTodos();

export const reducer = (state: State, action: Action): State => {
  let newState: State;

  switch (action.type) {
    case 'ADD_TODO':
      newState = {
        ...state,
        todos: [
          { id: uuidv4(), text: action.payload, completed: false },
          ...state.todos,
        ],
      };
      break;

    case 'TOGGLE_TODO':
      newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
      break;

    case 'REMOVE_TODO':
      newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      break;

    case 'EDIT_TODO':
      newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo,
        ),
      };
      break;

    case 'SET_FILTER':
      newState = { ...state, filter: action.payload };
      break;

    default:
      return state;
  }

  // Сохраняем обновленный список в localStorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState.todos));

  return newState;
};
