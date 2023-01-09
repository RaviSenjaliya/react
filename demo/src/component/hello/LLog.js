import React from "react";
import { useState } from "react";
import axios from "axios";

export default function LLog() {
  const [data, setdata] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });
  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const hand = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/accounts/register", data).then((x) => {
      console.log(x.data);
    });
  };
  return (
    <div>
      <form onSubmit={hand}>
        <input type="text" name="title" onChange={handler} /> <br />
        <input type="text" name="firstName" onChange={handler} />
        <br />
        <input type="text" name="lastName" onChange={handler} />
        <br />
        <input type="email" name="email" onChange={handler} />
        <br />
        <input type="text" name="password" onChange={handler} />
        <br />
        <input type="text" name="confirmPassword" onChange={handler} />
        <br />
        <input type="checkbox" name="acceptTerms" />
        <br />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}
