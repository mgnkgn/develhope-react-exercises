import React from "react";

const Sum = ({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }) => {
  const result = numbers.reduce((a, b) => {
    return a + b;
  });
  //   console.log(props.numbers);
  return <div>{result}</div>;
};

export default Sum;
