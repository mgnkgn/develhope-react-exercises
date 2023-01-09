import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return <h1 className="welcome">Welcome, {this.props.name}</h1>;
  }
}
