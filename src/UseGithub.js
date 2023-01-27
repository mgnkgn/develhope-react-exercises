import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UseGithub = (receivedName) => {
  const { data, error } = useSWR(
    receivedName ? `https://api.github.com/users/${receivedName}` : null,
    fetcher
  );

  return {
    data,
    error,
    loading: !data && !error,
  };
  // const [username, setUsername] = useState();
  // const [imgUrl, setImgUrl] = useState();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [link, setLink] = useState();

  // const fetchData = async (receivedName) => {
  //   try {
  //     setLoading(true);
  //     const data = await fetch(`https://api.github.com/users/${receivedName}`);

  //     const resolvedData = await data.json();
  //     console.log(resolvedData);
  //     setUsername(resolvedData.name);
  //     setImgUrl(resolvedData.avatar_url);
  //     setLink(resolvedData.html_url);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(receivedName);
  // }, [username]);
  // return { username, imgUrl, link, loading, error, fetchData };
};

export default UseGithub;
