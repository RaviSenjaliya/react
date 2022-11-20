import React from "react";
import reviews from "./data";
import { useState } from "react";

export default function Mydata() {
  const [Input, setInput] = useState();
  const Handler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={Handler} value={Input} />

      {reviews
        .filter((value, index, array) => {
          return value.name.indexOf(Input) >= 0;
        })
        .map((value, index, array) => {
          return <h5>{value.name}</h5>;
        })}
    </div>
  );
}
