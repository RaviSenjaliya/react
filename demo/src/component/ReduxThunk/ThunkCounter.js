import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, Minus, AsncMinus } from "./Action/ActionT";

export default function ThunkCounter() {
  const collect = useSelector((y) => y.counter);

  const show = useDispatch();

  const Increment = () => {
    show(plus());
  };
  const Decriment = () => {
    show(Minus());
  };
  const MinusCounter = () => {
    show(AsncMinus(4));
  };

  return (
    <div>
      <h1>{collect}</h1>
      <br />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decriment}>Decriment</button>
      <button onClick={MinusCounter}>Multy</button>
    </div>
  );
}
