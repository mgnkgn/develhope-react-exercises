import React, { Component } from "react";
import TodoList from "./TodoList";

export default class App extends Component {
  loginHandler(event) {
    event.preventDefault();
    console.log("Login successful.");
  }
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
