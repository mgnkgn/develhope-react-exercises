import React, { useRef, useEffect } from "react";

const CarDetails = () => {
  const formRef = useRef();

  const initialData = { model: "S80", year: "2009", color: "metallic" };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  const resetHandler = (event) => {
    event.preventDefault();
    formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <input type="text" name="model" defaultValue={initialData.model} />
      <input type="text" name="year" defaultValue={initialData.year} />
      <input type="text" name="color" defaultValue={initialData.color} />
      <button type="submit">Submit</button>
      <button onClick={resetHandler}>Reset</button>
    </form>
  );
};

export default CarDetails;
