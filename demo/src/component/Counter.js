import React from "react";
import { useState } from "react";

export default function Counter() {
  const [text, setText] = useState(1);
  const [state, setstate] = useState(1);

  const myfun = (e) => {
    setText(e.target.value);
  };
  const clickk = () => {
    setstate(parseInt(text) + state);
  };
  return (
    <>
      <h1>{state}</h1>
      <input type="text" value={text} onChange={myfun} />
      <button onClick={clickk}>click</button>
    </>
  );
}
