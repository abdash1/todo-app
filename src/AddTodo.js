import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {content} = this.state;
    const {addtodo} = this.props;

    if (content.trim()) {
      addtodo({content});
      this.setState({
        content: ''
      });
    } else {
      alert('Please enter a valid task!');
    }
  };

  render() {
    const {content} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Enter a task"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
