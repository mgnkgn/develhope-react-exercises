import React, { useState, useRef } from "react";
import GithubUser from "./GithubUser";

const GithubUsersList = () => {
  const userRef = useRef();
  const usersArray = [
    "mgnkgn",
    "visionmedia",
    "c9s",
    "weierophinney",
    "christkv",
  ];
  const [usersList, setUsersList] = useState(usersArray);

  const resultedList = usersList.map((el) => {
    return <GithubUser name={`${el}`} />;
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUser = userRef.current.value;
    setUsersList((prevState) => [enteredUser, ...prevState]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={userRef} />
        <button type="submit">Fetch User</button>
      </form>
      <div>
        {usersList.map((el, i) => {
          return <GithubUser name={`${el}`} key={i} />;
        })}
      </div>
    </div>
  );
};

export default GithubUsersList;
