import React, { Component } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { addTaskRequest } from '../actions/index';


class AddTask extends Component {
  state = {
    task: '',
  };

  submitNewTask = async (e) => {
    try {
      e.preventDefault();
      const task = await this.state.task.trim();
      if (task.length < 5) {
        return alert('task should contain atleast 5 characters'); // eslint-disable-line
      }
      this.props.addTaskRequest(task);
    } catch (err) {
      console.log(err);// eslint-disable-line
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewTask}>
          <Input
            className={'string'}
            size={'medium'}
            onChange={event => this.setState({ task: event.target.value })}
            focus
            icon={'write'}
            placeholder="Input task here"
          />
        </form>
        <Button
          onClick={this.submitNewTask}
          color={'blue'}
          content={'Submit Task'}
        />
      </div>
    );
  }
}

export default connect(null, { addTaskRequest })(AddTask);
