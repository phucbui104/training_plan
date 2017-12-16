import { takeLatest, put, call } from 'redux-saga/effects'; // eslint-disable-line
import api from './api';
import { fetchAllTasksSuccessed, fetchAllTasksFailed } from '../actions';

function* fetchAllTasks() {
  try {
    const data = yield call(
      api,
      'http://localhost:8000/todos',
    );
    if (data) {
      yield put(fetchAllTasksSuccessed(data));
    }
  } catch (err) {
    yield put(fetchAllTasksFailed());
  }
}

export default function* watchFetchAllTasks() {
  yield takeLatest('FETCH_ALL_TASKS_REQUEST', fetchAllTasks);
}
