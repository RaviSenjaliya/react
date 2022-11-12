import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const myfn = () => {
    navigate("/about");
  };
  return (
    <>
      <h1>Contact page</h1>
      <button className="btn btn-info" onClick={myfn}>
        bake to about
      </button>
    </>
  );
};

export default Contact;
