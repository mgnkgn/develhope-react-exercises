import React from "react";
import Name from "./Name";

const App = () => {
  const hello = <h1>Hello, World!</h1>;
  const calculateSum = (a, b) => {
    return <h2>{a + b}</h2>;
  };
  return (
    <>
      <Name name="Bob" />
      {calculateSum(2, 4)}
    </>
  );
};

export default App;
