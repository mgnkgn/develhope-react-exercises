import React, { Component } from "react";

import Welcome from "./Welcome";

export default class InteractiveWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "our beloved guest.",
    };
  }
  nameInputHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState((state) => {
      return { name: event.target.value };
    });
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.nameInputHandler.bind(this)} />
        </form>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
