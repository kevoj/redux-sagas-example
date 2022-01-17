// Libs
import { call, put, takeLatest } from 'redux-saga/effects';
// Types
import Types from '../types/todoTypes';
// Actions
import {
  onGetTodo,
  onGetTodoReceive,
  onLoadingTodo,
} from '../actions/todoActions';
// Services
import {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../../services/todoServices';

function* fetchAddTodo({ payload }) {
  try {
    yield put(onLoadingTodo('add', true));
    const { data } = yield call(addTodo, payload);
    yield put(onLoadingTodo('add', false));
    if (data) {
      yield put(onGetTodo());
    }
  } catch (e) {
    console.log(`Error todo: ${e}`);
  }
}

function* fetchGetTodo() {
  try {
    yield put(onLoadingTodo('list', true));
    const { data } = yield call(getTodo);
    yield put(onLoadingTodo('list', false));
    if (data) {
      yield put(onGetTodoReceive(data));
    }
  } catch (e) {
    console.log(`Error todo: ${e}`);
  }
}

function* fetchUpdateTodo({ payload }) {
  try {
    yield put(onLoadingTodo('update', true));
    const { data } = yield call(updateTodo, payload);
    yield put(onLoadingTodo('update', false));
    if (data) {
      yield put(onGetTodo());
    }
  } catch (e) {
    console.log(`Error todo: ${e}`);
  }
}

function* fetchDeleteTodo({ payload }) {
  try {
    yield put(onLoadingTodo('delete', true));
    const { data } = yield call(deleteTodo, payload);
    yield put(onLoadingTodo('delete', false));
    if (data) {
      yield put(onGetTodo());
    }
  } catch (e) {
    console.log(`Error todo: ${e}`);
  }
}

export default [
  takeLatest(Types.ADD_TODO, fetchAddTodo),
  takeLatest(Types.GET_TODO, fetchGetTodo),
  takeLatest(Types.UPDATE_TODO, fetchUpdateTodo),
  takeLatest(Types.DELETE_TODO, fetchDeleteTodo),
];
