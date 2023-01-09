import React from "react";
import "./Formm.css";
import { useState, useEffect } from "react";
import "../index.css";

export default function Form2() {
  const [Data, setData] = useState({
    Firstname: "",
    Lastname: "",
    Fathername: "",
    Email: "",
    Birth: "",
    Company: "",
    Message: "",
    hobbies: [],
  });
  const [Validation, setValidation] = useState({
    Firstname: "",
    Lastname: "",
    Fathername: "",
    Email: "",
    Birth: "",
    Company: "",
    Message: "",
  });
  const [stor, setstor] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("form", JSON.stringify(Data));
  // }, [Data]);

  // ===================================================================================================

  const Handler = (e) => {
    if (e.target.name == "hobbies") {
      // ---------------------------

      let mydata = Data.hobbies;
      if (e.target.checked) {
        mydata.push(e.target.value);
        setData({ ...Data, hobbies: mydata });
      } else {
        let x = mydata.filter((vv) => {
          return vv != e.target.value;
        });
        setData({ ...Data, hobbies: x });
      }

      // ---------------------------
    } else {
      setData({ ...Data, [e.target.name]: e.target.value });
      // = = = = = = = = = = = = = = = =

      if (e.target.value == "") {
        setValidation({
          ...Validation,
          [e.target.name]: `${e.target.name} is requird`,
        });
      } else if (
        /^[a-zA-Z]+$/.test(e.target.value) == false &&
        e.target.name == "Firstname"
      ) {
        setValidation({
          ...Validation,
          [e.target.name]: ` ${e.target.name} not a number`,
        });
      } else {
        setValidation({ ...Validation, [e.target.name]: "" });
      }
      // = = = = = = = = = = = = = = = =
    }
  };

  const myfun = (e) => {
    e.preventDefault();

    setstor((e) => [...e, Data]);
    localStorage.setItem("form", JSON.stringify(stor));

    console.log(Data);
  };
  return (
    <div>
      <div className="center">
        {/* <h2 className="text-center top text-white">Contact Form</h2> */}
        <form onSubmit={myfun}>
          <div className="row ">
            <div className="col-sm-6">
              {/* ----------------------------------------------------------------------- */}
              <div className="top ">
                <label className="form-label">First Name</label> <br />
                <input
                  type="text"
                  id="input"
                  name="Firstname"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Firstname}</span>
              </div>
              <div className="top ">
                <label className="form-label">Father Name</label> <br />
                <input
                  type="text"
                  id="input"
                  name="Fathername"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Fathername}</span>
              </div>
              <div className="top ">
                <label className="form-label">Date of Birth</label> <br />
                <input
                  type="date"
                  id="input"
                  name="Birth"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Birth}</span>
              </div>
              {/* ================ */}
              <div className="top ">
                <label className="form-label">Message</label> <br />
                <textarea
                  name="message"
                  className="w-100 "
                  onChange={Handler}
                ></textarea>
                <span>{Validation.message}</span>
              </div>
              {/* ---------------------------------------------------------------------------- */}
              <div className="top ">
                <input
                  type="checkbox"
                  name="hobbies"
                  onClick={Handler}
                  value="cricket"
                />
                <label className="form-label">cricket</label> <br />
                <input
                  type="checkbox"
                  name="hobbies"
                  onClick={Handler}
                  value="dance"
                />
                <label className="form-label">dance</label>
              </div>
            </div>
            {/* ======================================================================================= */}
          </div>
        </form>
      </div>
      <div className="output ">
        <b>{localStorage.getItem("form", Data.Fathername)}</b>
      </div>
    </div>
  );
}
