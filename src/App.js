import React, { Component } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hola Jose Vega",
      newTodo: '',
      todos: [],
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    // console.log(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  newTodoChange(event) {
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {...todos[index]};
    todos[index].done = event.target.checked;

    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map((todo) => {
      return {
        // ...todo, use this or
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}!!</h3>
        <NewTodoForm
          formSubmit={this.formSubmit.bind(this)}
          newTodoChange={this.newTodoChange.bind(this)}
          newTodo={this.state.newTodo} />
        <button onClick={() => this.allDone()} >All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
