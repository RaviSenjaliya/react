import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decriment } from "./component/action/Action";

export default function CountingRX() {
  const data = useSelector((x) => x);
  const alldata = useDispatch();

  const IncrementFun = () => {
    alldata(Increment());
  };
  const DecrimentFun = () => {
    alldata(Decriment());
  };
  return (
    <div>
      {data} <br />
      <button onClick={IncrementFun}>Increment</button>
      <button onClick={DecrimentFun}>Decriment</button>
    </div>
  );
}
