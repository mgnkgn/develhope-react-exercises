import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      remember: false,
      invClass: "",
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
    const enteredPass = event.target.value;
    if (enteredPass.length <= 8) {
      this.setState((state) => {
        return {
          password: event.target.value,
          invClass: "btn-warning",
        };
      });
    } else {
      this.setState((state) => {
        return {
          password: event.target.value,
          invClass: "btn-valid",
        };
      });
    }
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
              className={this.state.invClass}
            >
              Login
            </button>
          }
        </form>
        <div>Name: {this.state.name}</div>
        <div>
          Password: {this.state.password.length > 8 ? this.state.password : ""}
        </div>
        <div>Remember Me: {" " + this.state.remember}</div>
      </div>
    );
  }
}
