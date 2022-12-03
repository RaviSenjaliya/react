import React from "react";
import "./exam.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const E312 = () => {
  const [data, setdata] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const sub = (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", data).then((e) => {
      console.log(e);
      toast("done...");
    });
  };

  return (
    <div>
      <form onSubmit={sub} className="w-50">
        <input
          type="text"
          onChange={handler}
          className=" form-control"
          name="userId"
        />
        <input
          type="text"
          onChange={handler}
          className=" form-control"
          name="id"
        />
        <input
          type="text"
          onChange={handler}
          className=" form-control"
          name="title"
        />
        <input
          type="text"
          onChange={handler}
          className=" form-control"
          name="body"
        />
        <input type="submit" value="save" className=" form-control" />
      </form>
    </div>
  );
};

export default E312;
