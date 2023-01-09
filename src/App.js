import React, { Component } from "react";

import InteractiveWelcome from "./InteractiveWelcome";
import Welcome from "./Welcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

export default class App extends Component {
  loginHandler(event) {
    event.preventDefault();
    console.log("Login successful.");
  }
  render() {
    return (
      <div>
        <Welcome />
        {/* <InteractiveWelcome /> */}
        {/* <Login onLogin={this.loginHandler.bind(this)} /> */}
        <UncontrolledLogin />
      </div>
    );
  }
}
