import React from "react";
import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [Load, setLoad] = useState(true);
  const [Data, setData] = useState([]);

  const getDatas = async () => {
    const getD = await fetch(url);
    const allD = await getD.json();

    setData(allD);
    setLoad(false);
  };

  useEffect(() => {
    getDatas();
  }, [url]);

  return { Load, Data };
};

export default UseFetch;
