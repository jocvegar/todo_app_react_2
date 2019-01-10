import React, { Component } from 'react';
import './App.css';

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
        <h1>{this.state.message}!!</h1>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="newTodo">New ToDo</label>
          <input
            type="text"
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
            onChange={(event) => this.newTodoChange(event)} />
          <button type="submit">Add ToDo</button>
        </form>
        <button onClick={() => this.allDone()} >All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(event) => this.toggleTodoDone(event, index)} />
                <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit' }}>
                  {todo.title}
                </span>
                <button onClick={() => this.removeTodo(index)} >Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
