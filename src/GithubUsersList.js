import React, { useRef } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import GithubUser from "./GithubUser";

const GithubUsersList = () => {
  const inputRef = useRef();
  const { username } = useParams();
  const navigate = useNavigate();
  const usersArray = [
    "mgnkgn",
    "visionmedia",
    "c9s",
    "weierophinney",
    "christkv",
  ];
  const clickHandler = () => {
    const enteredValue = inputRef.current.value;
    navigate(`/users/${enteredValue}`);
  };
  const resultedList = usersArray.map((el, i) => {
    return <GithubUser name={`${el}`} key={`${el}-${i}`} />;
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>github profile</button>
      {/* {resultedList} */}
      <Outlet />
    </div>
  );
};

export default GithubUsersList;
