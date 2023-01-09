import React, { Component } from "react";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

export default class App extends Component {
  loginHandler(event) {
    event.preventDefault();
    console.log("Login successful.");
  }
  render() {
    return (
      <div>
        <Welcome name={"Bob"} />
        <TodoList />
      </div>
    );
  }
}
