import React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "../MU/mu.css";
import { ToastContainer, toast } from "react-toastify";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import authoFatch from "../Axios/custom";
import { useNavigate } from "react-router-dom";

export default function LogIN() {
  const show = useNavigate();
  // const [row, setrow] = useState([]);
  // const [col, setcol] = useState([
  //   { field: "created", filter: "agNumberColumnFilter" },
  //   { field: "id", filter: "agNumberColumnFilter" },
  //   { field: "email", filter: true, sortable: true },
  //   { field: "title", filter: true, sortable: true },
  //   { field: "firstName", filter: true, sortable: true },
  //   { field: "lastName", filter: true, sortable: true },
  // ]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   ==================================================================
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const mysubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/authenticate", data)
      .then((r) => {
        console.log(r);
        localStorage.setItem("alluser", JSON.stringify(r.data));
        toast("login successfully");
        show("/product");
      })
      .catch(() => {
        toast("404");
      });
  };

  const click = () => {
    authoFatch
      .get("accounts")
      .then((e) => {
        console.log(e.data);
        // setrow(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="midd top mt-5 p-4">
        <h1 className="text-center bg-light  text-dark  p-2 rounded-2  mb-4">
          Log-In
        </h1>
        <form onSubmit={mysubmit}>
          <TextField
            label="ID"
            name="email"
            onChange={handler}
            className="w-100"
            variant="outlined"
          />
          <TextField
            label="password"
            name="password"
            onChange={handler}
            className="w-100 mt-4"
            variant="outlined"
          />
          <input
            type="submit"
            className="btn btn-danger mt-4  form-control"
            value="save"
          />
        </form>
        <button
          className="btn  btn-outline-dark  mt-2 form-control"
          onClick={click}
        >
          Get Data
        </button>

        {/* --------------------------------------------------------------------------- */}
      </div>
      {/* <br />
      <div
        className="ag-theme-alpine midd top mt-5 p-4 "
        style={{ width: 1200, height: 500 }}
      >
        <AgGridReact rowData={row} columnDefs={col} />
      </div> */}
    </div>
  );
}
