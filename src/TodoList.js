import React, { Component, createRef } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ value: "Todo1", id: 110 }],
    };
  }
  _formRef = React.createRef();
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this._formRef.current.elements.todo.value);
    const newTodo = {
      value: this._formRef.current.elements.todo.value,
      id: Math.random() * 100,
    };
    const existingTodo = this.state.items.find(
      (item) => item.value === newTodo.value
    );

    if (existingTodo) {
      alert("You already added this todo 🐸");
      return;
    }
    this.setState((state) => {
      return {
        items: [...this.state.items, newTodo],
      };
    });
    this._formRef.current.elements.todo.value = "";
  };

  resetHandler = (event) => {
    event.preventDefault();
    this.setState((state) => {
      return {
        items: [],
      };
    });
  };

  removeHandler = (id) => {
    this.setState((state) => {
      return {
        items: this.state.items.filter((item) => item.id !== id),
      };
    });
  };
  render() {
    return (
      <>
        <form
          onSubmit={this.submitHandler.bind(this)}
          ref={this._formRef}
          autoComplete="off"
        >
          <input type="text" name="todo" />
          <button type="submit">Enter Todo</button>
          <button onClick={this.resetHandler.bind(this)}>Reset</button>
        </form>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              {item.value}
              <button
                id={item.id}
                onClick={this.removeHandler.bind(this, item.id)}
              >
                Remove Todo
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
