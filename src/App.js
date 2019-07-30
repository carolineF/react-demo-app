import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play miral kart'}
    ]
  }
  deleteTodos = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id  = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
