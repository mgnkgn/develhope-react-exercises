import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      remember: false,
    };
  }
  _formRef = React.createRef();
  componentDidMount = () => {
    console.log(this._formRef.current.elements);

    this._formRef.current.elements.username.focus();
  };
  submitHandler = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.value;
    this.setState((state) => {
      return {
        name: username,
        password: password,
        remember: !this.state.remember,
      };
    });
  };
  resetHandler = (event) => {
    event.preventDefault();
    this.setState((state) => {
      return {
        name: "",
        password: "",
        remember: false,
      };
    });
    this._formRef.current.elements.username.value = "";
    this._formRef.current.elements.password.value = "";
    this._formRef.current.elements.remember.checked = false;
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} ref={this._formRef}>
          <input type="text" name="username" defaultValue={this.state.name} />
          <input
            type="text"
            name="password"
            defaultValue={this.state.password}
          />
          <input
            type="checkbox"
            name="remember"
            defaultValue={this.state.remember}
          />
          <button type="submit">Login</button>
          <button onClick={this.resetHandler.bind(this)}>Reset</button>
        </form>
        <div>Name: {this.state.name}</div>
        <div>Password: {this.state.password}</div>
        <div>Remember Me: {" " + this.state.remember}</div>
      </div>
    );
  }
}
