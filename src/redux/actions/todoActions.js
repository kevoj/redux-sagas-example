// Types
import Types from '../types/todoTypes';

export const onAddTodo = (title) => ({
  type: Types.ADD_TODO,
  payload: {
    title,
  },
});

export const onGetTodo = () => ({
  type: Types.GET_TODO,
});

export const onGetTodoReceive = (data) => ({
  type: Types.GET_TODO_RECEIVE,
  payload: [...data],
});

export const onUpdateTodo = (id, title) => ({
  type: Types.UPDATE_TODO,
  payload: {
    id,
    title,
  },
});

export const onDeleteTodo = (id) => ({
  type: Types.DELETE_TODO,
  payload: {
    id,
  },
});

export const onLoadingTodo = (name, status) => ({
  type: Types.LOADING_TODO,
  payload: {
    name,
    status,
  },
});

export const onResetTodo = (name) => ({
  type: Types.RESET_TODO,
  payload: {
    name,
  },
});
