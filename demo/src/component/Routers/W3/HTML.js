import React from "react";
import { Outlet } from "react-router-dom";

export default function HtML() {
  return (
    <div>
      <div className="text-center my-5">
        <h2 className=" bg-danger text-white border-5 p-3">HTML</h2>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sint.
        </small>
      </div>
      <Outlet />
    </div>
  );
}
