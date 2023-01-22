import React, { useEffect } from "react";
import { useState } from "react";

const GithubUser = (props) => {
  const [username, setUsername] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [link, setLink] = useState();
  useEffect(() => {
    const fetchData = async (username) => {
      const data = await fetch(`https://api.github.com/users/${username}`);

      const resolvedData = await data.json();
      console.log(resolvedData);
      setUsername(resolvedData.name);
      setImgUrl(resolvedData.avatar_url);
      setLink(resolvedData.html_url);
    };

    fetchData(props.name);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "350px",
      }}
    >
      <div>Username: {username} </div>
      <img
        src={`${imgUrl}`}
        alt="user-avatar"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
        }}
      />{" "}
      <div>
        Go to the profile:{" "}
        <a href={`${link}`} target="_blank">
          {link}
        </a>
      </div>
    </div>
  );
};

export default GithubUser;
