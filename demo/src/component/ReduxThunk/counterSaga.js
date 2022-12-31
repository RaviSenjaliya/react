import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterSaga = () => {
  const select = useSelector((y) => y.counter);
  const show = useDispatch();

  const add = () => {
    show({ type: "plus1" });
  };
  const less = () => {
    show({ type: "Minus1" });
  };
  const mul = () => {
    show({ type: "Multy1" });
  };
  const divv = () => {
    show({ type: "div1" });
  };

  return (
    <div>
      {select}
      <br />
      <button onClick={add}>plus</button>
      <button onClick={less}>Minus</button>
      <button onClick={mul}>Multy</button>
      <button onClick={divv}>devide</button>
    </div>
  );
};

export default CounterSaga;
