import React from "react";
import { useState } from "react";
import TaskformD from "./TaskformD";
import "./taskform.css";
import Select from "react-select";

const Taskform = () => {
  const [Data, setData] = useState([]);
  const [input, setinput] = useState({
    Fname: "",
    Lname: "",
    Phone: "",
    Email: "",
    State: "",
  });
  const State = [
    { value: "Gujarat", label: "Gujarat" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Ms" },
    { value: "Goa", label: "Goa" },
    { value: "Kerala", label: "Kerala" },
  ];
  const remove = (index) => {
    let mydata = [...Data];
    mydata.splice(index, 1);
    setData(mydata);
  };
  const addd = (index) => {
    let mydata = [...Data];
    mydata.splice(index, 1);
    setData(mydata);
  };
  // ------------------------------------------------------------
  const handler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  //   -------------------------------------------------------------
  const submitt = (e) => {
    e.preventDefault();
    let mydata = [...Data];
    mydata.push(input);
    setData(mydata);
  };

  //   ---------------------------------------------------------------
  return (
    <div>
      <form id="ravi" onSubmit={submitt}>
        <input
          type="text"
          name="Fname"
          onChange={handler}
          placeholder="First Name"
          className=" form-control"
        />
        <br />
        <input
          type="text"
          name="Lname"
          onChange={handler}
          placeholder="Last Name"
          className=" form-control"
        />
        <br />
        <input
          type="text"
          name="Phone"
          onChange={handler}
          placeholder="Phone No"
          className=" form-control"
        />
        <br />
        <input
          type="email"
          name="Email"
          onChange={handler}
          placeholder="Email"
          className=" form-control"
        />
        <br />
        <Select
          name="State"
          onChange={(e) => {
            handler({ target: { name: "State", value: e.value } });
          }}
          options={State}
          placeholder="State"
        />

        <br />
        <input
          type="submit"
          value="Save"
          className="btn btn-danger form-control"
        />
      </form>
      <div className="my-5" id="in">
        <TaskformD alldata={Data} delet={remove} add={addd} />
      </div>
    </div>
  );
};

export default Taskform;
