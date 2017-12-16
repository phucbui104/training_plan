import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import rootSaga from './sagas/index';

const middleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

middleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} render={() => (<App />)} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
