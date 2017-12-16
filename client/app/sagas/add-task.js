import { // eslint-disable-line
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import api from './api';
import {
  addTaskSuccess,
  addTaskFail,
} from '../actions';

export function* AddTask(action) {
  try {
    const { text } = action;
    const data = yield call(
      api,
      'http://localhost:8000/todo', {
        method: 'POST',
        body: JSON.stringify({
          task: text,
        }),
      },
    );
    if (data) {
      yield put(addTaskSuccess(data._id, data.task)); // eslint-disable-line
    } else {
      yield put(addTaskFail());
    }
  } catch (e) {
    yield put(addTaskFail());
  }
}

export default function* watchAddTask() {
  yield takeLatest('ADD_TASK_REQUEST', AddTask);
}
