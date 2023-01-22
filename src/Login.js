import React, { useState, useRef } from "react";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState();

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;
    const rememberOpt = rememberInputRef.current.checked;

    setUsername(enteredUsername);
    setPassword(enteredPass);
    setRemember(rememberOpt);
    console.log(rememberOpt);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={usernameInputRef}
          name="username"
          id="username"
        />
        <input type="password" ref={passwordInputRef} name="pass" id="pass" />
        <input
          type="checkbox"
          ref={rememberInputRef}
          name="remember"
          id="remember"
        />
        <button type="submit">Login</button>
      </form>
      Username: {username}
      <br />
      Password: {password}
      <br />
      Remember: {remember ? "Yes" : "No"}
    </>
  );
};

export default Login;
