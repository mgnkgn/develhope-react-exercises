import React, { useState, useCallback } from "react";

const UseCounter = (initialValue = 0, secondValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);
  return { count, incrementCount, decrementCount, resetCount, secondValue };
};

export default UseCounter;
