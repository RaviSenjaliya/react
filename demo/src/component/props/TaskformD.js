import { Button } from "bootstrap";
import React from "react";
import "./taskform.css";

const TaskformD = (props) => {
  return (
    <div>
      {props.alldata.map((val, index) => {
        return (
          <div>
            <div className=" bg-light  text-center">
              <div className="row">
                <h4 className="col-sm-6">{val.Fname}</h4>
                <h4 className="col-sm-6">{val.Lname}</h4>
              </div>
              {/* <hr /> */}
              <div className="row">
                <h6 className="col-sm">{val.Email}</h6>
                <h6 className="col-sm">{val.Phone}</h6>
                <h6 className="col-sm">{val.State}</h6>
              </div>
            </div>
            <div className=" text-center bg-light mt-2">
              <span className="m-2">If you delet record .....👉</span>
              <button
                className="btn btn-outline-danger px-4  "
                onClick={() => {
                  props.delet(index);
                }}
              >
                X
              </button>

              <button
                className="btn btn-outline-success px-4 m-1  "
                onClick={() => {
                  props.add(index);
                }}
              >
                🧾
              </button>
              <span className="m-2">👈.....If you add record </span>
            </div>
            <hr className="hr" />
          </div>
        );
      })}
    </div>
  );
};

export default TaskformD;
