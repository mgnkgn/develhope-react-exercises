import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import ClickTracker from "./ClickTracker";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter incrementBy={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}
