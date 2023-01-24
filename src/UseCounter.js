import React, { useState } from "react";

const UseCounter = (initialValue = 0, secondValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return { count, incrementCount, decrementCount, resetCount, secondValue };
};

export default UseCounter;
