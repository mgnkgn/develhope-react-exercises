import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementBy });
    }, this.props.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
