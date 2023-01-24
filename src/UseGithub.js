import React, { useState, useEffect } from "react";

const UseGithub = (receivedName) => {
  const [username, setUsername] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState();

  const fetchData = async (receivedName) => {
    try {
      setLoading(true);
      const data = await fetch(`https://api.github.com/users/${receivedName}`);

      const resolvedData = await data.json();
      console.log(resolvedData);
      setUsername(resolvedData.name);
      setImgUrl(resolvedData.avatar_url);
      setLink(resolvedData.html_url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(receivedName);
  }, [username]);
  return { username, imgUrl, link, loading, error, fetchData };
};

export default UseGithub;
