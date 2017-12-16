import { getAllTasks, createNewTask, deleteExistedTask, getTask, updateTask } from '../controllers/todoController';
import { payloadValidation } from '../controllers/validationController';

const routes = [
  {
    method: 'GET',
    path: '/todos',
    handler: getAllTasks,
  }, {
    method: 'POST',
    path: '/todo',
    config: {
      validate: {
        payload: payloadValidation,
      },
      handler: createNewTask,
    },
  }, {
    method: 'GET',
    path: '/todo/{id}',
    config: {
      handler: getTask,
    },
  }, {
    method: 'PUT',
    path: '/todo/{id}',
    config: {
      validate: {
        payload: payloadValidation,
      },
      handler: updateTask,
    },
  }, {
    method: 'DELETE',
    path: '/todo/{id}',
    config: {
      handler: deleteExistedTask,
    },
  },
];

export default routes;
