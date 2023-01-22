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
  const resultedList = usersArray.map((el) => {
    return <GithubUser name={`${el}`} />;
  });
  return <div>{resultedList}</div>;
};

export default GithubUsersList;
