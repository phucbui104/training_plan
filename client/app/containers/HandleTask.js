import React, { Component } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteExistedTaskRequest, updateTaskRequest } from '../actions/index';

class HandleTask extends Component {
  state = {
    isEditing: false,
  };

  editTask = () => {
    this.setState({
      isEditing: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isEditing: false,
    });
  }

  updateTask = async (event) => {
    try {
      event.preventDefault();
      const updatedTask = this.refs.editInput.value;
      const { _id } = this.props;
      this.props.updateTaskRequest(_id, updatedTask);
      this.setState({
        isEditing: false,
      });
    } catch (err) {
      console.log(err);// eslint-disable-line no-console
    }
  }

  deleteExistedTask = () => {
    const { _id } = this.props;
    this.props.deleteExistedTaskRequest(_id);
  }

  renderTaskList = () => {
    const { task } = this.props;

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.updateTask}>
            <input
              className={'string'}
              defaultValue={task}
              ref={'editInput'}
              size={'medium'}
              focus
              icon={'write'}
              placeholder="Update task"
            />
          </form>
        </td>
      );
    }
    return (
      <td>{task}</td>
    );
  }

  renderButton() {
    if (this.state.isEditing) {
      return (
        <td>
          <Button
            onClick={this.updateTask}
            content={'Save'}
          />
          <Button
            onClick={() => this.handleCancel()}
            content={'Cancel'}
          />
        </td>
      );
    }
    return (
      <td>
        <Button
          onClick={this.editTask}
          content={'Edit'}
        />
        <Button
          onClick={this.deleteExistedTask}
          content={'Delete'}
        />
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskList()}
        {this.renderButton()}
      </tr>
    );
  }
}

HandleTask.propTypes = {
  deleteExistedTaskRequest: PropTypes.func.isRequired,
  updateTaskRequest: PropTypes.func.isRequired,
};

export default connect(null, { deleteExistedTaskRequest, updateTaskRequest })(HandleTask);

