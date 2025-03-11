import { State } from '../../../app/providers/model';

export const filterTodos = (state: State) => {
  switch (state.filter) {
    case 'active':
      return state.todos.filter((todo) => !todo.completed);
    case 'completed':
      return state.todos.filter((todo) => todo.completed);
    case 'all':
    default:
      return state.todos;
  }
};
