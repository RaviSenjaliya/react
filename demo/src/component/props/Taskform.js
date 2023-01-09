import React from "react";
import { useState } from "react";
import TaskformD from "./TaskformD";
import "./taskform.css";

const Taskform = () => {
  const [search, setsearch] = useState("");
  const [Add, setAdd] = useState(-1);
  const [Data, setData] = useState([]);
  const [input, setinput] = useState({
    Fname: "",
    Lname: "",
    Phone: "",
    Email: "",
    State: "",
  });

  const remove = (index) => {
    let mydata = [...Data];
    mydata.splice(index, 1);
    setData(mydata);
  };

  // --------------------------------------------------------------
  const handler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const Shandler = (e) => {
    setsearch(e.target.value);
  };
  // --------------------(adit)-------------------------------------------
  const add = (index) => {
    let add = Data[index];
    setinput(add);
    setAdd(index);
  };
  //   --------------------------------------------------------------
  const submitt = (e) => {
    e.preventDefault();

    if (Add >= 0) {
      let b = [...Data];
      b[Add].Fname = input.Fname;
      b[Add].Lname = input.Lname;
      b[Add].Phone = input.Phone;
      b[Add].Email = input.Email;
      b[Add].State = input.State;
      setData(b);
    } else {
      let mydata = [...Data];
      mydata.push(input);
      setData(mydata);
    }
    setAdd(-1);
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
          value={input.Fname}
          className=" form-control"
        />
        <br />
        <input
          type="text"
          name="Lname"
          onChange={handler}
          placeholder="Last Name"
          value={input.Lname}
          className=" form-control"
        />
        <br />
        <input
          type="text"
          name="Phone"
          onChange={handler}
          placeholder="Phone No"
          value={input.Phone}
          className=" form-control"
        />
        <br />
        <input
          type="email"
          name="Email"
          onChange={handler}
          placeholder="Email"
          value={input.Email}
          className=" form-control"
        />
        <br />
        <input
          type="text"
          name="State"
          onChange={handler}
          placeholder="State"
          value={input.State}
          className=" form-control"
        />
        <br />

        <br />
        <input
          type="submit"
          value="Save"
          className="btn btn-danger form-control"
        />
      </form>
      <div className="my-3" id="iin">
        <input
          type="text"
          placeholder="serch...."
          className=" form-control"
          onChange={Shandler}
          value={search}
        />
      </div>
      <div className="my-3" id="in">
        <TaskformD alldata={Data} delet={remove} Madd={add} search={search} />
      </div>
    </div>
  );
};

export default Taskform;
