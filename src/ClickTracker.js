import React, { Component } from "react";

export default class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Click a button",
    };
  }
  lastClickHandler(event) {
    console.log(event.target.innerHTML);
    this.setState((state) => {
      return {
        value: event.target.innerHTML,
      };
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button onClick={this.lastClickHandler.bind(this)}>Button 1</button>
        <button onClick={this.lastClickHandler.bind(this)}>Button 2</button>
        <button onClick={this.lastClickHandler.bind(this)}>Button 3</button>
      </>
    );
  }
}
