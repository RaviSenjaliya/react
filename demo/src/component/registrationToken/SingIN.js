import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SingIN = () => {
  const [Data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const mysubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/register", Data)
      .then((e) => {
        console.log(e.data);
        toast("successfully...");
      })
      .catch(() => {
        toast("Something wrong...");
      });
  };
  return (
    <div>
      <form onSubmit={mysubmit}>
        <input type="text" onChange={myhandler} name="title" />
        <br />
        <input type="text" onChange={myhandler} name="firstName" />
        <br />
        <input type="text" onChange={myhandler} name="lastName" />
        <br />
        <input type="text" onChange={myhandler} name="email" />
        <br />
        <input type="text" onChange={myhandler} name="password" />
        <br />
        <input type="text" onChange={myhandler} name="confirmPassword" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SingIN;
