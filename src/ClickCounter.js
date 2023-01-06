import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleCounter() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleCounter.bind(this)}>Increment</button>
      </>
    );
  }
}
