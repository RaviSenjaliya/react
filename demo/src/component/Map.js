import React from "react";
import reviews from "./data";
import { useState } from "react";

export default function Mapdata() {
  const [Fill, setFill] = useState();

  const myfun = (e) => {
    setFill(e.target.value);
  };

  return (
    <div className="p-5">
      <input type="text" value={Fill} onChange={myfun} />
      <button className="btn btn-danger">Click me</button>

      {/* ================================= */}
      <b>
        {reviews
          .filter((val) => {
            return val.name.indexOf(Fill) >= 0;
          })
          .map((val) => {
            return <h6>{val.name}</h6>;
          })}
      </b>
    </div>
  );
}
