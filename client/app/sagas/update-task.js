import { put, takeLatest, call } from 'redux-saga/effects'; // eslint-disable-line
import api from './api';
import { updateTaskSuccessed, updateTaskFailed } from '../actions';

function* updateTask(action) {
  try {
    const { _id, text } = action;
    if (!_id) return;
    yield call(
      api,
      `http://localhost:8000/todo/${_id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          task: text,
        }),
      },
    );
    yield put(updateTaskSuccessed(_id, text));
  } catch (err) {
    yield put(updateTaskFailed);
  }
}
export default function* watchFetchAllTasks() {
  yield takeLatest('UPDATE_TASK_REQUEST', updateTask);
}
