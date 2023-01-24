import React, { useState, useEffect } from "react";

const UseGithub = (receivedName) => {
  const [username, setUsername] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [link, setLink] = useState();

  const fetchData = async (receivedName) => {
    const data = await fetch(`https://api.github.com/users/${receivedName}`);

    const resolvedData = await data.json();
    console.log(resolvedData);
    setUsername(resolvedData.name);
    setImgUrl(resolvedData.avatar_url);
    setLink(resolvedData.html_url);
  };

  useEffect(() => {
    fetchData(receivedName);
  }, [username]);
  return { username, imgUrl, link };
};

export default UseGithub;
