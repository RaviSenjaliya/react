import React from "react";

export default function P1c(props) {
  return (
    <div className=" col-sm-4 ">
      <div className="card  w-75  ">
        <img src={props.alldata.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.alldata.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
