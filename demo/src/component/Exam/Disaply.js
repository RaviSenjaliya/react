import React from "react";

const Disaplyy = (props) => {
  return (
    <div>
      <div>{props.vall.title}</div>
      <img src={props.vall.url} alt="" className="w-25" />
    </div>
  );
};

export default Disaplyy;
