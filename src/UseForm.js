import React, { useState } from "react";

const UseForm = (data = {}) => {
  const [values, setValues] = useState({});

  const handleIncome = (data) => {
    setValues(data);
    // T
  };
  return { values, handleIncome };
};

export default UseForm;
