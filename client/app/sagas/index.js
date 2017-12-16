import { fork } from 'redux-saga/effects'; // eslint-disable-line
import watchAddTask from './add-task'; // eslint-disable-line
import watchFetchAllTasks from './fetch-task';
import watchUpdateTask from './update-task';
import watchDeleteExistedTask from './delete-task';

export default function* rootSaga() {
  yield [
    fork(watchAddTask),
    fork(watchFetchAllTasks),
    fork(watchUpdateTask),
    fork(watchDeleteExistedTask),
  ];
}
