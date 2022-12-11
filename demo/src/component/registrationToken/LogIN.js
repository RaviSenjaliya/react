import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function LogIN() {
  const [row, setrow] = useState([]);
  const [col, setcol] = useState([
    { field: "created", filter: "agNumberColumnFilter" },
    { field: "id", filter: "agNumberColumnFilter" },
    { field: "email", filter: true, sortable: true },
    { field: "title", filter: true, sortable: true },
    { field: "firstName", filter: true, sortable: true },
    { field: "lastName", filter: true, sortable: true },
  ]);

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
      })
      .catch(() => {
        toast("404");
      });
  };

  const click = () => {
    let data = localStorage.getItem("alluser");
    let x = JSON.parse(data);

    axios
      .get("http://localhost:4000/accounts", {
        headers: {
          Authorization: "Bearer " + x?.jwtToken,
        },
      })
      .then((e) => {
        console.log(e.data);
        setrow(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <form onSubmit={mysubmit}>
        <input type="text" onChange={handler} name="email" />
        <br />
        <input type="text" onChange={handler} name="password" />
        <br />
        <input type="submit" value="save" />
      </form>
      <button onClick={click}>Get Data</button>

      {/* --------------------------------------------------------------------------- */}

      <div className="ag-theme-alpine" style={{ width: 900, height: 500 }}>
        <AgGridReact rowData={row} columnDefs={col} />
      </div>
    </div>
  );
}
