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
  resetHandler(event) {
    event.preventDefault();
    this.setState((state) => {
      return {
        name: "",
        password: "",
        remember: false,
      };
    });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.name}
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
          {
            <button
              disabled={!this.state.name || !this.state.password}
              onClick={this.props.onLogin.bind(this)}
            >
              Login
            </button>
          }
          <button onClick={this.resetHandler.bind(this)}>Reset</button>
        </form>
        <div>Name: {this.state.name}</div>
        <div>Password: {this.state.password}</div>
        <div>Remember Me: {" " + this.state.remember}</div>
      </div>
    );
  }
}
