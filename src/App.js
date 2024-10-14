import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const {todos} = this.state;
    const updatedTodos = todos.filter(todos => {
      return  todos.id !== id;
    });
    this.setState({
      todos: updatedTodos
    })
  }

  addtodo = (todo) => {
    const  {todos} = this.state;
    todo.id = Math.random();
    const updatedTodos= [...todos, todo];
    this.setState({
      todos: updatedTodos
    })
  }

  render(){
    const  {todos} = this.state;
    return (
      <div className="todo-app container">
        <h1 className='center blue text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo  addtodo={this.addtodo}/>
      </div>
    );
  }
}

export default App;
