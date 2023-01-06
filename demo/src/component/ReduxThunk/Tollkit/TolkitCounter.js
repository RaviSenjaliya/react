import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reduxTollkit";
import { useState } from "react";

function TolkitCounter() {
  const [text, setText] = useState(1);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const click = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <input type="text" value={text} onChange={click} />
      <button onClick={() => dispatch(incrementByAmount(text))}>push</button>
    </div>
  );
}

export default TolkitCounter;
