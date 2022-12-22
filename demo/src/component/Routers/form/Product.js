import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const delet = useNavigate();

  const click = () => {
    localStorage.removeItem("alluser");
    delet("/");
  };
  return (
    <div>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <h1>heloo</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          click();
        }}
      >
        delet
      </button>
    </div>
  );
}
