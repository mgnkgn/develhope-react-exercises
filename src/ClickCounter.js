import React, { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter((state) => {
      return state + 1;
    });
  };
  return (
    <div>
      Current count: {counter}
      <button onClick={counterHandler}>Click</button>
    </div>
  );
};

export default ClickCounter;
