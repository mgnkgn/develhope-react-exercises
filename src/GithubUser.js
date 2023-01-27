import React, { useEffect } from "react";
import { useState } from "react";
import UseGithub from "./UseGithub";

const GithubUser = (props) => {
  const { data, error, loading } = UseGithub(props.name);
  console.log(data);
  // const [username, setUsername] = useState();
  // const [imgUrl, setImgUrl] = useState();
  // const [link, setLink] = useState();
  // useEffect(() => {
  //   const fetchData = async (username) => {
  //     const data = await fetch(`https://api.github.com/users/${username}`);

  //     const resolvedData = await data.json();
  //     console.log(resolvedData);
  //     setUsername(resolvedData.name);
  //     setImgUrl(resolvedData.avatar_url);
  //     setLink(resolvedData.html_url);
  //   };

  //   fetchData(props.name);
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "350px",
        border: "2.5px solid whitesmoke",
        margin: "10px",
        padding: "15px 3.5px",
      }}
    >
      {!loading && !error && (
        <>
          <div>
            Username for {props.name}: {data.name}{" "}
          </div>
          <img
            src={`${data.avatar_url}`}
            alt="user-avatar"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
            }}
          />{" "}
          <div style={{ border: "1px dashed royalblue", padding: "7.5px" }}>
            Go to the profile:{" "}
            <a href={`${data.html_url}`} target="_blank">
              {"link"}
            </a>
          </div>
        </>
      )}
      {!loading && error && <>{error}</>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default GithubUser;
