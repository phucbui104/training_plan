import React, { Component } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import HandleTask from '../containers/HandleTask';
import { fetchAllTasksRequest } from '../actions';

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchAllTasksRequest();
  }
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              colSpan={'3'}
              content={'Task List'}
            >
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.todos.map(taskDocument =>
            <HandleTask
              key={taskDocument._id}
              task={taskDocument.task}
              _id={taskDocument._id}
            />)}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer,
});

export const mapDispatchToProps = dispatch => ({
  fetchAllTasksRequest: () => dispatch(fetchAllTasksRequest()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
