export default function todoReducer(state = [], action) { // eslint-disable-line
  switch (action.type) {
    case 'FETCH_ALL_TASKS_SUCCESSED':
      return [
        ...state,
        ...action.payload,
      ];
    case 'FETCH_ALL_TASKS_FAILED':
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    case 'ADD_TASK_SUCCEEDED': {
      return [
        ...state,
        {
          _id: action._id, // eslint-disable-line no-underscore-dangle
          task: action.text,
          message: action.message,
        },
      ];
    }
    case 'ADD_TASK_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    case 'DELETE_EXISTED_TASK_SUCCESSED': {
      return state.filter(task => task._id !== action._id);
    }
    case 'DELETE_EXISTED_TASK_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    case 'UPDATE_TASK_SUCCESSED': {
      const newOne = {
        _id: action._id, // eslint-disable-line no-underscore-dangle
        task: action.text,
      };
      return [
        ...state.map(task => (task._id === action._id ? newOne : task)),
      ];
    }
    case 'UPDATE_TASK_FAILED': {
      return [
        ...state,
        {
          message: action.message,
        },
      ];
    }
    default: return state;
  }
}

