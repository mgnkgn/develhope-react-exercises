import React, { Component } from "react";

import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementBy });
    }, this.props.interval);
  }
  render() {
    return (
      <h1>
        <CounterDisplay count={this.state.count} />
      </h1>
    );
  }
}
