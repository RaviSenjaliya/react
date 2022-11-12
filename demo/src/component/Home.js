import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import Loding from "./loading";

const Home = () => {
  const [data, setData] = useState([]);
  const [Load, setLoad] = useState(true);

  const myfn = async () => {
    try {
      setLoad(false);
      const API = await fetch("https://jsonplaceholder.typicode.com/photos");
      setData(await API.json());
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  useEffect(() => {
    myfn();
  }, []);

  if (Load) {
    <Loding />;
  }
  return (
    <>
      {data.map((val) => {
        return (
          <div className=" card  w-25">
            <img src={val.url} alt="" className=" img-fluid " />
            <div className="card-body">
              <b>{val.title}</b>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
