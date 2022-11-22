import React from "react";
// import "./select2.css";
import { useState } from "react";
import Select from "react-select";
// import "./select2.css";

export default function Ftask() {
  const [data, setdata] = useState({
    title: "",
    Fname: "",
    Lname: "",
    Sdate: "",
    Edate: "",
    check: "",
  });

  const title = [
    { value: "Mr", label: "Mr" },
    { value: "Mis", label: "Mis" },
    { value: "Ms", label: "Ms" },
    { value: "Shree", label: "Shree" },
  ];
  const Education = [
    { value: "B.com", label: "B.com" },
    { value: "BCA", label: "BCA" },
    { value: "MCA", label: "MCA" },
    { value: "MBA", label: "MBA" },
  ];
  const University = [
    { value: "MSU", label: "MSU" },
    { value: "PU", label: "PU" },
    { value: "GU", label: "GU" },
    { value: "GTU", label: "GTU" },
  ];
  const handler = (e) => {
    if (e.target.type == "checkbox") {
      if (e.target.checked == true) {
        setdata({ ...data, [e.target.name]: "Firstname" });
      } else {
        setdata({ ...data, [e.target.name]: e.target.value });
      }
    } else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  };
  const hendeldata = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="center  formm  mt-5">
      <form className="top " onSubmit={hendeldata}>
        {/* = = = = = = = = = == = = = = = = = = = = = = = = = = = = =  */}

        <div className="row mb-4">
          <div className="form-outline">
            <label className="form-label">Title</label>
            <Select
              name="title"
              onChange={(e) => {
                handler({ target: { name: "title", value: e.value } });
              }}
              options={title}
            />
          </div>
        </div>
        {/* = = = = = = = = = == = = = = = = = = = = = = = = = = = = =  */}

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                onChange={handler}
                name="Fname"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                onChange={handler}
                name="Lname"
              />
            </div>
          </div>
        </div>
        {/* = = = = = = = = = == = = = = = = = = = = = = = = = = = = =  */}

        <div className="row mb-5">
          <div className="col-sm-4">
            <div className="form-outline">
              <label className="form-label">Education</label>
              <Select
                name="Education"
                onChange={(e) => {
                  handler({ target: { name: "Education", value: e.value } });
                }}
                options={Education}
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="form-outline">
              <label className="form-label">University</label>
              <Select
                name="University"
                onChange={(e) => {
                  handler({ target: { name: "University", value: e.value } });
                }}
                options={University}
              />
            </div>
          </div>
        </div>
        {/* =========================================================== */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="Sdate"
                onChange={handler}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                name="Edate"
                onChange={handler}
              />
            </div>
          </div>
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            name="check"
          />
          <label className="form-check-label" for="form2Example33">
            Subscribe to our newsletter
          </label>
        </div>

        <input type="submit" className="btnn form-control" value="save" />
      </form>
    </div>
  );
}
