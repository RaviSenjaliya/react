import React from "react";
import { useState } from "react";

const Formm = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    mname: "",
    phone: "",
    address: "",
  });
  const fn = (e) => {
    setuser({ ...user, fname: e.target.value });
  };
  const ln = (e) => {
    setuser({ ...user, fname: e.target.value });
  };
  const mn = (e) => {
    setuser({ ...user, fname: e.target.value });
  };
  const pho = (e) => {
    setuser({ ...user, fname: e.target.value });
  };
  const add = (e) => {
    setuser({ ...user, fname: e.target.value });
  };
  const myfun = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={myfun}>
        <input type="text" onChange={fn} />
        <br />
        <input type="text" onChange={ln} />
        <br />
        <input type="text" onChange={mn} />
        <br />
        <input type="text" onChange={pho} />
        <br />
        <input type="text" onChange={add} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Formm;
