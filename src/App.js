import React, { Component } from "react";

import InteractiveWelcome from "./InteractiveWelcome";
import Welcome from "./Welcome";
import Login from "./Login";

export default class App extends Component {
  loginHandler(event) {
    event.preventDefault();
    console.log("Login successful.");
  }
  render() {
    return (
      <div>
        <Welcome name={"Mauro"} />
        {/* <InteractiveWelcome /> */}
        <Login onLogin={this.loginHandler.bind(this)} />
      </div>
    );
  }
}
