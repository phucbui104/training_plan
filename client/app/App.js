import React from 'react'; // eslint-disable-line
import { Header, Icon } from 'semantic-ui-react';
import AddTask from './containers/AddTask';
import TodoList from './components/TodoList';

const App = () => (
  <div>
    <Icon name={'browser'} circular />
    <Header
      as={'h2'}
      icon
      content={'TODO Training Plan Application'}
      size={'large'}
      color={'brown'}
    />
    <AddTask />
    <TodoList />
  </div>
);

export default App;
