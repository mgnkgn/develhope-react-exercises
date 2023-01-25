import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import GithubUser from "./GithubUser";

const ShowGithubUser = (props) => {
  const { username } = useParams();
  useEffect(() => {}, [username]);
  console.log(username);
  return (
    <div>
      <GithubUser name={username} />
    </div>
  );
};

export default ShowGithubUser;
