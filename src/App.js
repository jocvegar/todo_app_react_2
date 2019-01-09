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

  toggleTodoDone(event) {

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
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  type="checkbox"
                  onChange={(event) => this.toggleTodoDone(event, index)} />
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
