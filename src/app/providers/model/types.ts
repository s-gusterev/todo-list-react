import { Dispatch } from 'react';
import { Todo } from '../../../entities/todo';

// Состояние
export interface State {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

// Действия
export type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string }
  | { type: 'EDIT_TODO'; payload: { id: string; text: string } }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

// Контекст
export interface StoreContextType {
  state: State;
  dispatch: Dispatch<Action>;
}
