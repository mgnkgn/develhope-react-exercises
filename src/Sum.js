import React from "react";

const Sum = (props) => {
  const result = props.numbers.reduce((a, b) => {
    return a + b;
  });
  console.log(props.numbers);
  return <div>{result}</div>;
};

export default Sum;
