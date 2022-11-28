import React from "react";
import { useState, useEffect } from "react";

const API = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      });
  }, []);

  function ass() {
    let ass = [...Data];
    ass.sort(function (a, b) {
      return;
    });
  }
  function diss() {
    let ass = Data.sort(function (a, b) {
      return;
    });
  }

  return (
    <div>
      {Data.map((val) => {
        return <h6>{val.id}</h6>;
      })}
      <button className="btn btn-primary" onClick={ass}>
        ass
      </button>
      <button className="btn  btn-danger" onClick={diss}>
        diss
      </button>
    </div>
  );
};

export default API;

{
  /* <>
<div className="card w-25 rounded-3 mb-4">
  <img src={val.image} alt="" className=" w-100 " />;
  <div className=" card-body p-3 ">
    <div className="bg-info p-2 mb-3 rounded-3">{val.title}</div>
    <div className=" rounded-3  bg-light ">
      <p>{val.description}</p>
      <b>{val.price}</b>
    </div>
    <button className="btn bg-danger text-white w-100">
      Order
    </button>
  </div>
</div>
</> */
}
// points.sort(function(a, b){return a-b});
