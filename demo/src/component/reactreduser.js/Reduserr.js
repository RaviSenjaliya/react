import React from "react";
import { useState, useReducer } from "react";

const Reduserr = () => {
  const myredus = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "Delet":
        const x = [...state];
        x.splice(action.payload, 1);
        return x;
    }
  };
  //   ===================================================================
  const [data, setdata] = useState("");
  const [val, disval] = useReducer(myredus, []);
  //   ===================================================================

  const handler = (e) => {
    setdata(e.target.value);
  };

  const add = () => {
    disval({ type: "ADD", payload: data });
  };
  const delet = (e) => {
    disval({ type: "Delet", payload: e });
  };
  return (
    <div>
      <input type="text" value={data} onChange={handler} />
      <input type="submit" value="add" onClick={add} />
      {val.map((e, index) => {
        return (
          <div>
            <h3>{e}</h3>
            <input
              type="button"
              value="delet"
              onClick={() => {
                delet(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reduserr;
