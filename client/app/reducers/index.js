import { combineReducers } from 'redux'; // eslint-disable-line
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
