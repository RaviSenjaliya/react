import React from "react";
import "./Formm.css";
import "./index.css";
import { useState, useEffect } from "react";

export default function Exam2() {
  const [deta, setdeta] = useState({
    Firstname: "",
    LastName: "",
    Email: "",
    Password: "",
    CPassword: "",
    Country: "",
    Month: "",
    Day: "",
    Year: "",
    check1: "",
    check: "",
  });
  const [valid, setvalid] = useState({
    Firstname: "",
    LastName: "",
    Email: "",
    Password: "",
    CPassword: "",
    Country: "",
    Month: "",
    Day: "",
    Year: "",
  });

  let handler = (e) => {
    if (e.target.type == "checkbox") {
      setdeta({ ...deta, [e.target.name]: e.target.checked });
    } else {
      setdeta({ ...deta, [e.target.name]: e.target.value });
      if (e.target.value == "") {
        setvalid({
          ...valid,
          [e.target.name]: `${e.target.name} is requird`,
        });
      } else if (
        /^[a-zA-Z]+$/.test(e.target.value) == false &&
        e.target.name == e.target.name
      ) {
      } else {
        setvalid({ ...valid, [e.target.name]: "" });
      }
    }
  };
  let sub = (e) => {
    e.preventDefault(e);
    console.log(deta);
  };

  return (
    <div className="center">
      <form onSubmit={sub}>
        <div className="top ">
          <label className="form-label">First Name</label> <br />
          <input
            type="text"
            id="input"
            onChange={handler}
            name="Firstname"
            className="form-control"
          />
          <span className="error">{valid.Firstname}</span>
          {/* ------------------------------------------------------------ */}
          <label className="form-label">Last Name</label> <br />
          <input
            type="text"
            id="input"
            onChange={handler}
            name="LastName"
            className="form-control"
          />
          <span className="error">{valid.LastName}</span>
          {/* ------------------------------------------------------------- */}
          <label className="form-label">Email</label> <br />
          <input type="text" id="input" name="Email" className="form-control" />
          <span className="error">{valid.Email}</span>
          {/* ------------------------------------------------------------- */}
          <label className="form-label">Password</label> <br />
          <input
            type="text"
            id="input"
            onChange={handler}
            name="Password"
            className="form-control"
          />
          <span className="error">{valid.Password}</span>
          {/* ------------------------------------------------------------- */}
          <label className="form-label">Password</label> <br />
          <input
            type="text"
            id="input"
            onChange={handler}
            name="CPassword"
            className="form-control"
          />
          <span className="error">{valid.CPassword}</span>
          {/* ------------------------------------------------------------- */}
          <label className="form-label">Country</label> <br />
          <input
            type="text"
            id="input"
            onChange={handler}
            name="Country"
            className="form-control"
          />
          <span className="error">{valid.Country}</span>
          {/* ------------------------------------------------------------- */}
          <div className="top">
            <label className="form-label">Date of Birth</label>
            <select
              className="form-control mt-2 w-50"
              name="Month"
              onChange={handler}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
            </select>
            <select
              className="form-control mt-2 w-50"
              name="Day"
              onChange={handler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              className="form-control mt-2 w-50"
              name="Year"
              onChange={handler}
            >
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2005">2005</option>
            </select>
          </div>
          {/* --------------------------------------- */}
          <div className="top ">
            <input type="checkbox" name="check1" onChange={handler} />
            <label className="form-label">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium,
            </label>
            <br />
            <input type="checkbox" name="check2" onChange={handler} />

            <label className="form-label">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, necessitatibus!
            </label>
          </div>
        </div>
        <div>
          <input type="submit" className="btn  w-100 " id="btn" />
        </div>
      </form>
    </div>
  );
}
