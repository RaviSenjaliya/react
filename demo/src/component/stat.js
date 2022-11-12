import React from "react";
import { useState } from "react";

export default function Stat() {
  const [first, setFirst] = useState("Ravi");
  const [middle, setMiddle] = useState("Shaileshbhai");
  const [last, setLast] = useState("Senjaliya");
  const [mix, setMix] = useState("");

  const myfun = () => {
    // setMix(first[0] + "" + middle[0] + "  " + last);
    setMix(`${first[0]}${middle[0]}  ${last} `);
  };
  return (
    <div className="main">
      <h1>{mix}</h1>
      <button className="btn btn-danger" onClick={myfun}>
        Click Me
      </button>
    </div>
  );
}
