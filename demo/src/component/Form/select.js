import React from "react";
import { useState } from "react";
import Select from "react-select";
import "../Formm.css";

export default function Selectt() {
  const [data, setdata] = useState({
    name: "",
    degree: "",
    collage: "",
  });
  const degree = [
    { value: "B.com", label: "B.com" },
    { value: "BCA", label: "BCA" },
    { value: "MCA", label: "MCA" },
    { value: "MBA", label: "MBA" },
  ];
  const collage = [
    { value: "MSU", label: "MSU" },
    { value: "PU", label: "PU" },
    { value: "GU", label: "GU" },
    { value: "GTU", label: "GTU" },
  ];
  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const formsub = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="center top p-4 mt-5">
      <form onSubmit={formsub}>
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handler}
        />
        <br />
        {/* ============================================================== */}
        <label>degree:</label>
        <Select
          name="degree"
          onChange={(e) => {
            handler({ target: { name: "degree", value: e.value } });
          }}
          options={degree}
        />
        <br />
        {/* ============================================================== */}

        <label>collage:</label>
        <Select
          name="collage"
          onChange={(e) => {
            handler({ target: { name: "collage", value: e.value } });
          }}
          options={collage}
        />
        <br />
        {/* ============================================================== */}

        <input
          type="submit"
          className="btn btn-danger form-control"
          value="save"
        />
      </form>
    </div>
  );
}
