import React from "react";
import "./Formm.css";
import "./index.css";
import { useState, useEffect } from "react";

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

  // useEffect(() => {
  //   localStorage.setItem("form", JSON.stringify(Data));
  // }, [Data]);

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
    localStorage.setItem("form", JSON.stringify(Data));

    console.log(Data);
  };
  return (
    <div>
      <div className="center">
        <h2 className="text-center top text-white">Contact Form</h2>
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
              <div className="top ">
                <label className="form-label">Company Name</label> <br />
                <input
                  type="text"
                  id="input"
                  name="Company"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Company}</span>
              </div>
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
            <div className="col-sm-6">
              <div className="top ">
                <label className="form-label">Last Name</label> <br />
                <input
                  type="text"
                  id="input"
                  name="Lastname"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Lastname}</span>
              </div>
              <div className="top ">
                <label className="form-label">Email Address</label> <br />
                <input
                  type="email"
                  id="input"
                  name="Email"
                  className="form-control"
                  onChange={Handler}
                />
                <span>{Validation.Email}</span>
              </div>
              <div className="top ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799198932!2d-74.25987701513004!3d40.69767006272707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1660468897862!5m2!1sen!2sin"></iframe>
              </div>
              <div>
                <input type="submit" className="btn  w-100 " id="btn" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="output ">
        <b>{localStorage.getItem("form", Data.Fathername)}</b>
      </div>
    </div>
  );
}
