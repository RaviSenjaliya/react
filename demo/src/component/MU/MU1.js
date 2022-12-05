import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "./mu.css";
const City = [
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Bangalore	",
    label: "Bangalore	",
  },
  {
    value: "Hyderabad",
    label: "Hyderabad",
  },
];

export default function MU1() {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    Zip: "",
    requirements: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const sub = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={sub}>
      <div className="midd top mt-5 p-4">
        <h1 className="text-center bg-danger text-white p-2 rounded-2  mb-4">
          customer form
        </h1>

        <div className="bg-light p-1 my-3 rounded-2">
          <h6>Name:</h6>
        </div>
        <div className="row">
          <div className="col-sm">
            <TextField
              label="FirstName"
              name="fname"
              onChange={handleChange}
              className="w-100"
              variant="outlined"
              helperText="please Input Field"
            />
          </div>
          <div className="col-sm">
            <TextField
              label="LastName"
              name="lname"
              onChange={handleChange}
              className="w-100"
              variant="outlined"
              helperText="please Input Field"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-light  p-1 my-3 rounded-2">
            <h6>Shiping Address:</h6>
          </div>
          <div className="col-sm">
            <TextField
              label="Street Address"
              name="address"
              onChange={handleChange}
              className="w-100"
              variant="outlined"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm">
            <TextField
              select
              label="Select"
              onChange={handleChange}
              name="city"
              helperText="Please select your City"
            >
              {City.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-sm">
            <TextField
              label="State"
              name="state"
              onChange={handleChange}
              className="w-100"
              variant="outlined"
            />
          </div>
          <div className="col-sm">
            <TextField
              label="ZipCode"
              name="Zip"
              onChange={handleChange}
              className="w-100"
              variant="outlined"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-light  p-1 my-3 rounded-2">
            <h6>your requirements:</h6>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            name="requirements"
            onChange={handleChange}
            multiline
            className="w-100"
            rows={4}
            defaultValue="requirements..."
          />
        </div>
        <div className="mt-4">
          <input type="submit" value="save" className="btn btn-danger w-100" />
        </div>
      </div>
    </form>
  );
}
