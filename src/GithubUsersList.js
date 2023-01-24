import React from "react";
import GithubUser from "./GithubUser";

const GithubUsersList = () => {
  const usersArray = [
    "mgnkgn",
    "visionmedia",
    "c9s",
    "weierophinney",
    "christkv",
  ];
  const resultedList = usersArray.map((el, i) => {
    return <GithubUser name={`${el}`} key={`${el}-${i}`} />;
  });
  return <div>{resultedList}</div>;
};

export default GithubUsersList;
