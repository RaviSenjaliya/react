import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decriment, Multy } from "./component/action/Action";

export default function CountingRX() {
  const data = useSelector((x) => x); //(store thai badhu)
  const alldata = useDispatch(); //(print karavamate)

  const IncrementFun = () => {
    alldata(Increment());
  };
  const DecrimentFun = () => {
    alldata(Decriment());
  };
  const MultyFun = () => {
    alldata(Multy());
  };
  return (
    <div>
      {data} <br />
      <button onClick={IncrementFun}>Increment</button>
      <button onClick={DecrimentFun}>Decriment</button>
      <button onClick={MultyFun}>Multy</button>
    </div>
  );
}
