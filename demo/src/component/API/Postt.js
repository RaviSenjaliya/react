import React from "react";
import { useState } from "react";
import axios from "axios";

const Postt = () => {
  const [data, setdata] = useState({
    title: "Mr",
    firstName: "Jason",
    lastName: "Watmore",
    email: "jason@example.com",
    password: "pass123",
    confirmPassword: "pass123",
    acceptTerms: true,
  });

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const hand = (e) => {
    axios.post("", data).then((e) => {
      console.log(e.data);
    });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={hand}>
        <input type="text" name="title" onChange={handler} />
        <input type="text" name="title" onChange={handler} />
        <input type="text" name="title" onChange={handler} />
        <input type="text" name="title" onChange={handler} />
        <input type="text" name="title" onChange={handler} />
        <input type="text" name="title" onChange={handler} />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default Postt;
