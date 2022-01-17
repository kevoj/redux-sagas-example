// api
import { create } from 'apisauce';
const api = create({ baseURL: 'http://localhost:8000/api' });

export const addTodo = async (data) => {
  return await api.post('/todo', data);
};

export const getTodo = async () => {
  return await api.get('/todo');
};

export const updateTodo = async (data) => {
  return await api.put(`/todo/${data.id}`, data);
};

export const deleteTodo = async (data) => {
  return await api.delete(`/todo/${data.id}`);
};
