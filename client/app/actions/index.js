export const fetchAllTasksRequest = () => ({
  type: 'FETCH_ALL_TASKS_REQUEST',
});

export const fetchAllTasksSuccessed = (taskList) => ({
  type: 'FETCH_ALL_TASKS_SUCCESSED',
  payload: taskList,
  message: 'fetch task list successful',
});

export const fetchAllTasksFailed = () => ({
  type: 'FETCH_ALL_TASKS_FAILED',
  message: 'fetch task list failed',
});

export const addTaskRequest = (task) => ({
  type: 'ADD_TASK_REQUEST',
  text: task,
});

export const addTaskSuccess = (id, text) => ({
  type: 'ADD_TASK_SUCCEEDED',
  message: 'add task successful',
  _id: id,
  text,
});

export const addTaskFail = () => ({
  type: 'ADD_TASK_FAILED',
  message: 'error',
});

export const deleteExistedTaskRequest = (taskId) => ({
  type: 'DELETE_EXISTED_TASK_REQUEST',
  _id: taskId,
});

export const deleteExistedTaskSuccessed = (taskId) => ({
  type: 'DELETE_EXISTED_TASK_SUCCESSED',
  _id: taskId,
  message: 'delete task successful',
});

export const deleteExistedTaskFailed = () => ({
  type: 'DELETE_EXISTED_TASK_FAILED',
  message: 'delete task failed',
});

export const updateTaskRequest = (taskId, task) => ({
  type: 'UPDATE_TASK_REQUEST',
  _id: taskId,
  text: task,
});

export const updateTaskSuccessed = (taskId, task) => ({
  type: 'UPDATE_TASK_SUCCESSED',
  _id: taskId,
  text: task,
});

export const updateTaskFailed = () => ({
  type: 'UPDATE_TASK_FAILED',
  message: 'update task failed',
});
