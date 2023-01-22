import React, { useState, useEffect } from "react";

const ClickCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter((state) => {
      return state + 1;
    });
  };

  useEffect(() => {
    props.onCounterChange(counter);
  }, [counter]);

  return (
    <div>
      Current count: {counter}
      <button onClick={counterHandler}>Click</button>
    </div>
  );
};

export default ClickCounter;
