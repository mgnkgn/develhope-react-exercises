import React, { Component } from "react";

import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <InteractiveWelcome /> */}
        <Login />
      </div>
    );
  }
}
