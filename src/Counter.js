import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Clean up");
    };
  }, []);
  return <div>Counter: {counter}</div>;
};

export default Counter;
