import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      remember: false,
    };
  }

  handleUsername(event) {
    this.setState((state) => {
      return {
        name: event.target.value,
      };
    });
  }

  handlePassword(event) {
    this.setState((state) => {
      return {
        password: event.target.value,
      };
    });
  }

  handleCheck(event) {
    this.setState((state) => {
      return {
        remember: !this.state.remember,
      };
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleUsername.bind(this)}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePassword.bind(this)}
        />
        <input
          type="checkbox"
          value={"Remember me"}
          checked={this.state.remember}
          onChange={this.handleCheck.bind(this)}
        />
        <div>Name: {this.state.name}</div>
        <div>Password: {this.state.password}</div>
        <div>Remember Me: {" " + this.state.remember}</div>
      </div>
    );
  }
}
