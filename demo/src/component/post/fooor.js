import React from "react";
import { useState } from "react";
import axios from "axios";
import "./fooor.css";
import Fooor2 from "./fooor2";
import { ToastContainer, toast } from "react-toastify";

export default function Fooor() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: " ",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      Cname: "",
      catchPhrase: "",
      bs: "",
    },
  });
  // ----------------------------------------------------
  const Handler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  // ----------------------------------------------------

  const del = (index) => {
    let val = [...data];
    val.splice(index, 1);
    setdata(val);
  };
  // ----------------------------------------------------

  const sub = (e) => {
    e.preventDefault();
    let val = [...data];
    val.push(input);
    setdata(val);

    // axios
    //   .post("https://jsonplaceholder.typicode.com/users", input)
    //   .then((e) => {
    //     console.log(e);
    //     setinput(e);
    //     toast("done...😄");
    //   });
  };
  return (
    <div>
      <div className="midd top mt-5 p-4">
        <h1 className="text-center  bg-danger text-white p-2 rounded-2">
          User Form
        </h1>
        <form onSubmit={sub}>
          <h5 className="my-4 text-center bg-light p-2">User Details</h5>
          <label className="form-label">Name</label> <br />
          <input
            type="text"
            id="input"
            name="name"
            className="form-control"
            onChange={Handler}
          />
          <label className="form-label">username</label> <br />
          <input
            type="text"
            id="input"
            name="username"
            className="form-control"
            onChange={Handler}
          />
          <label className="form-label">email</label> <br />
          <input
            type="text"
            id="input"
            name="email"
            className="form-control"
            onChange={Handler}
          />
          {/* ------------------------------------------------------------------- */}
          <h5 className="my-4 text-center bg-light p-2">Address</h5>
          <label className="form-label">street</label> <br />
          <input
            type="text"
            id="input"
            name="street"
            className="form-control"
            onChange={Handler}
          />
          <div className="row">
            <div className="col-sm">
              <label className="form-label">suite</label> <br />
              <input
                type="text"
                id="input"
                name="suite"
                className="form-control"
                onChange={Handler}
              />
            </div>
            <div className="col-sm">
              <label className="form-label">city</label> <br />
              <input
                type="text"
                id="input"
                name="city"
                className="form-control"
                onChange={Handler}
              />
            </div>
            <div className="col-sm">
              <label className="form-label">zipcode</label> <br />
              <input
                type="text"
                id="input"
                name="zipcode"
                className="form-control"
                onChange={Handler}
              />
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <h5 className="my-4 text-center bg-light p-2">Contact Details</h5>
          <div className="row">
            <div className="col-sm">
              <label className="form-label">phone</label> <br />
              <input
                type="text"
                id="input"
                name="phone"
                className="form-control"
                onChange={Handler}
              />
            </div>
            <div className="col-sm">
              <label className="form-label">website</label> <br />
              <input
                type="text"
                id="input"
                name="website"
                className="form-control"
                onChange={Handler}
              />
            </div>
          </div>
          {/* ----------------------------------------------------------------------------- */}
          <h5 className="my-4 text-center bg-light p-2">Company Details</h5>
          <div className="row">
            <div className="col-sm">
              <label className="form-label">Comp name</label> <br />
              <input
                type="text"
                id="input"
                name="Cname"
                className="form-control"
                onChange={Handler}
              />
            </div>
            <div className="col-sm">
              <label className="form-label">catchPhrase</label> <br />
              <input
                type="text"
                id="input"
                name="catchPhrase"
                className="form-control"
                onChange={Handler}
              />
            </div>
            <div className="col-sm">
              <label className="form-label">bs</label> <br />
              <input
                type="text"
                id="input"
                name="bs"
                className="form-control"
                onChange={Handler}
              />
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn form-control btn-danger mt-5"
          />
        </form>
      </div>
      <div className="Tmidd mt-5 p-4">
        <Fooor2 datas={data} cancel={del} />
      </div>
    </div>
  );
}
