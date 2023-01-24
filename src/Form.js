import React, { useRef } from "react";
import UseForm from "./UseForm";

const Form = () => {
  const { values, handleIncome } = UseForm();
  const nameRef = useRef();
  const passRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredPass = passRef.current.value;
    const dataForDelivery = { name: enteredName, pass: enteredPass };
    console.log(dataForDelivery);
    handleIncome(dataForDelivery);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" id="username" ref={nameRef} />
        <input type="password" name="password" id="password" ref={passRef} />
        <button type="submit">Submit</button>
      </form>
      <div>Username: {values.name || "Enter a username"}</div>
      <div>Password: {values.pass || "Enter a password"}</div>
    </div>
  );
};

export default Form;
