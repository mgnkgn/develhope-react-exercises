import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter incrementBy={1} interval={1000} />
        <ClickCounter />
      </div>
    );
  }
}
