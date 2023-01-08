import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    return (
      <ul>
        {items.map((item) => (
          <li key={items.length - items.indexOf(item)}>{item}</li>
        ))}
      </ul>
    );
  }
}
