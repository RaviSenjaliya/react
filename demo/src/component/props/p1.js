import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import P1c from "./p1c";

const P1 = () => {
  const [prp, setprp] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((e) => {
      setprp(e.data);
    });
  }, []);

  return (
    <div className="row">
      {prp.map((val) => {
        return <P1c alldata={val}></P1c>;
      })}
    </div>
  );
};

export default P1;
