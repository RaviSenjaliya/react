import React from "react";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
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
    axios.post("http://localhost:4000/accounts/register", data).then((e) => {
      console.log(e.data);
    });
    e.preventDefault();
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
};

export default Signup;
