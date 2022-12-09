import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import MemoD from "./MemoD";

export default function Memo() {
  const [item, setitem] = useState("");
  const [data, setdata] = useState([]);

  const handler = (e) => {
    setitem(e.target.value);
  };
  const clickk = () => {
    let mydata = [...data];
    mydata.push(item);
    setdata(mydata);
  };
  const del = useCallback((index) => {
    let mydata = [...data];
    mydata.splice(index, 1);
    setdata(mydata);
  }, []);

  return (
    <div>
      <div>
        <input type="text" onChange={handler} />
        <button onClick={clickk}>click</button>
        <MemoD data={data} remove={del} />
      </div>
    </div>
  );
}
