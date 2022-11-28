import React from "react";
import PformD from "./Pforms";
import { useState } from "react";

const Pform = () => {
  const [Data, setData] = useState([]);
  const [Item, setItem] = useState({
    Cname: "",
    Cno: "",
  });

  const remove = (index) => {
    let mydata = [...Data];
    mydata.splice(index, 1);
    setData(mydata);
  };
  //   ----------------------------------------------------------------
  const handler = (e) => {
    setItem({ ...Item, [e.target.name]: e.target.value });
  };
  //   ----------------------------------------------------------------
  const submitt = (e) => {
    e.preventDefault();
    let mydata = [...Data];
    mydata.push(Item);
    setData(mydata);
  };
  //   ----------------------------------------------------------------
  return (
    <form onSubmit={submitt}>
      <input type="text" name="Cname" onChange={handler} />
      <input type="text" name="Cno" onChange={handler} />
      <input type="submit" value="Save" className="btn btn-danger" />
      <PformD datas={Data} delet={remove} />
    </form>
  );
};

export default Pform;
