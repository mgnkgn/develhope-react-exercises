import React, { Component } from "react";

import InteractiveWelcome from "./InteractiveWelcome";
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
        {/* <InteractiveWelcome /> */}
        {/* <Login onLogin={this.loginHandler.bind(this)} /> */}
        <UncontrolledLogin />
      </div>
    );
  }
}
