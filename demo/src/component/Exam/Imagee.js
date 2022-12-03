import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Disaplyy from "./Disaply";

const Imagee = () => {
  const [img, setimg] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((e) => {
      setimg(e.data);
    });
  }, []);
  return (
    <div>
      {img.map((val) => {
        return <Disaplyy vall={val} />;
      })}
    </div>
  );
};

export default Imagee;
