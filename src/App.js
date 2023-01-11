import React, { Component } from "react";

import DisplayLanguage from "./DisplayLanguage";
import Welcome from "./Welcome";
import Sum from "./Sum";

export default class App extends Component {
  loginHandler(event) {
    event.preventDefault();
    console.log("Login successful.");
  }
  renderHandler(array, removeFnc) {
    return array.map((item) => (
      <li key={item.id}>
        {item.value}
        <button id={item.id} onClick={removeFnc.bind(this, item.id)}>
          Remove Todo
        </button>
      </li>
    ));
  }
  numbersArray = [1, 2, 3, 4, 5];
  render() {
    return (
      <div>
        {/* <TodoList render={this.renderHandler} /> */}
        {/* <DisplayLanguage /> */}
        <Welcome name={"Mauro"} />
        <Sum numbers={this.numbersArray} />
      </div>
    );
  }
}
