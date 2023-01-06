import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {this.props.age > 18 ? (
          <Age age={this.props.age} />
        ) : (
          <div>You are very young!</div>
        )}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Bob",
  age: 26,
};
