import React from "react";
import { useState } from "react";

export default function FullUserForm() {
  const [Input, setInput] = useState({
    Fname: "",
    Lname: "",
    Address: "",
    City: "",
    stats: "",
    Country: "",
  });
  const [Edu, setEdu] = useState([
    {
      Elevel: "",
      University: "",
      Degree: "",
      StartD: "",
      EndD: "",
    },
  ]);
  const [EXp, setEXp] = useState([
    {
      Company: "",
      Designation: "",
      eStartD: "",
      eEndD: "",
    },
  ]);

  const [valid, setvalid] = useState(false);
  // ==============================(reset)=========================================================
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };
  // ===============================(Education)============================================================
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...Edu];
    list.splice(index, 1);
    setEdu(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setEdu([
      ...Edu,
      {
        Elevel: "",
        University: "",
        Degree: "",
        StartD: "",
        EndD: "",
      },
    ]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...Edu];
    list[index][name] = value;
    setEdu(list);
  };
  // ===============================(Exp)============================================================
  // handle click event of the Remove button
  const handleeRemoveClick = (index) => {
    const list = [...EXp];
    list.splice(index, 1);
    setEXp(list);
  };
  // handle click event of the Add button
  const handleeAddClick = () => {
    setEXp([
      ...EXp,
      {
        Company: "",
        Designation: "",
        eStartD: "",
        eEndD: "",
      },
    ]);
  };
  const handleeInputChange = (e, index) => {
    if (e.target.type == "checkbox") {
      if (e.target.checked == true) {
        setvalid(true);
        setInput({ ...EXp, eEndD: "" });
      } else {
        setvalid(false);
      }
    } else {
      const { name, value } = e.target;
      const list = [...EXp];
      list[index][name] = value;
      setEXp(list);
    }
  };
  //   ================================================================
  const myhand = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };
  const mysub = (e) => {
    e.preventDefault();
    console.log([Input, Edu, EXp]);
  };

  return (
    <div className="container w-50 mt-5 bg-light p-3  ravi">
      <form onSubmit={mysub}>
        <div>
          <h3 className="bg-black text-white p-3 rounded-3">User Details</h3>
        </div>
        <div className="row ">
          <div class="mb-3 col-6">
            <input
              type="text"
              class="form-control"
              name="Fname"
              placeholder="FirstName"
              onChange={myhand}
            />
          </div>
          <div class="mb-3 col-6">
            <input
              type="text"
              class="form-control"
              name="Lname"
              placeholder="LastName"
              onChange={myhand}
            />
          </div>
        </div>
        {/* -------------------------------- */}
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            name="Address"
            placeholder="Address"
            onChange={myhand}
          />
        </div>
        {/* -------------------------------- */}
        <div className="row ">
          <div class="mb-3 col-4">
            <input
              type="text"
              class="form-control"
              name="City"
              placeholder="City"
              onChange={myhand}
            />
          </div>
          <div class="mb-3 col-4">
            <input
              type="text"
              class="form-control"
              name="stats"
              placeholder="state"
              onChange={myhand}
            />
          </div>
          <div class="mb-3 col-4">
            <input
              type="text"
              class="form-control"
              name="Country"
              placeholder="Country"
              onChange={myhand}
            />
          </div>
        </div>
        <hr />
        <div>
          <h3 className="bg-black text-white p-3 rounded-3">Education</h3>
        </div>
        <hr />
        {Edu.map((x, i) => {
          return (
            <div key={i}>
              <div class="mb-3 ">
                <input
                  type="text"
                  class="form-control"
                  name="Elevel"
                  onChange={(e) => handleInputChange(e, i)}
                  value={x.Elevel}
                  placeholder="Eeducation Level"
                />
              </div>
              {/* ----------------------------------- */}
              <div className="row ">
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    name="University"
                    onChange={(e) => handleInputChange(e, i)}
                    value={x.University}
                    placeholder="University"
                  />
                </div>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    name="Degree"
                    onChange={(e) => handleInputChange(e, i)}
                    value={x.Degree}
                    placeholder="Degree"
                  />
                </div>
              </div>
              {/* ------------------------------------ */}
              <div className="row ">
                <div class="mb-3 col-6">
                  <input
                    type="date"
                    class="form-control"
                    name="StartD"
                    onChange={(e) => handleInputChange(e, i)}
                    value={x.StartD}
                  />
                </div>
                <div class="mb-3 col-6">
                  <input
                    type="date"
                    class="form-control"
                    name="EndD"
                    onChange={(e) => handleInputChange(e, i)}
                    value={x.EndD}
                  />
                </div>
              </div>
              <div className="btn-box">
                {Edu.length !== 1 && (
                  <button
                    className="mr10 btn btn-danger"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {Edu.length - 1 === i && (
                  <button className="btn btn-success" onClick={handleAddClick}>
                    ➕
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <hr />
        <div>
          <h3 className="bg-black text-white p-3 rounded-3">Experience</h3>
        </div>
        <hr />
        {EXp.map((x, i) => {
          return (
            <div key={i}>
              <div className="row ">
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    value={x.Company}
                    class="form-control"
                    onChange={(e) => handleeInputChange(e, i)}
                    name="Company"
                    placeholder="Company"
                  />
                </div>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    value={x.Designation}
                    class="form-control"
                    onChange={(e) => handleeInputChange(e, i)}
                    name="Designation"
                    placeholder="Designation"
                  />
                </div>
              </div>
              {/* ------------------------------------- */}
              <div className="row ">
                <div class="mb-3 col-6">
                  <input
                    type="date"
                    value={x.eStartD}
                    class="form-control"
                    onChange={(e) => handleeInputChange(e, i)}
                    name="eStartD"
                  />
                </div>
                <div class="mb-3 col-6">
                  <input
                    type="date"
                    value={x.eEndD}
                    disabled={valid}
                    class="form-control"
                    onChange={(e) => handleeInputChange(e, i)}
                    name="eEndD"
                  />
                </div>
              </div>
              {/* ------------------------------------- */}
              <div className="mb-3">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="check"
                  onClick={handleeInputChange}
                />
                currently working.....
              </div>

              <div className="btn-box">
                {EXp.length !== 1 && (
                  <button
                    className="mr10 btn btn-danger"
                    onClick={() => handleeRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {EXp.length - 1 === i && (
                  <button className="btn btn-success" onClick={handleeAddClick}>
                    ➕
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <input type="submit" value="save" className="btn" />
          <button onClick={handleReset} className="btn ">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
