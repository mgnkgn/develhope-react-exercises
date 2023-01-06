import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name}</p>
        {this.props.age && <Age age={this.props.age} />}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Jack",
  // age: 26,
};
