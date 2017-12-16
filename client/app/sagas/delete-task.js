import { takeLatest, put, call } from 'redux-saga/effects'; // eslint-disable-line
// import api from './api';
import { deleteExistedTaskSuccessed, deleteExistedTaskFailed } from '../actions';

function* deleteExistedTask(action) {
  try {
    const { _id } = action;
    const url = `http://localhost:8000/todo/${_id}`;
    yield fetch(url, {
      method: 'DELETE',
    });
    yield put(deleteExistedTaskSuccessed(_id));
  } catch (err) {
    put(deleteExistedTaskFailed());
  }
}
export default function* watchDeleteExistedTask() {
  yield takeLatest('DELETE_EXISTED_TASK_REQUEST', deleteExistedTask);
}
