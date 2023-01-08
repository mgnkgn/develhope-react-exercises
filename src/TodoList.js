import React, { Component, createRef } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"],
    };
  }
  _formRef = React.createRef();
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this._formRef.current.elements.todo.value);
    const newTodo = this._formRef.current.elements.todo.value;
    if (this.state.items.includes(newTodo)) {
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
        </form>
        <ul>
          {this.state.items.map((item) => (
            <li key={this.state.items.length - this.state.items.indexOf(item)}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
