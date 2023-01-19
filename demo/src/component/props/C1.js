import React from "react";
import prototype from "prop-types";

export default function C1(props) {
  return <div>byyy {props.name}</div>;
}

C1.prototype = {
  name: prototype.oneOf(["A", "B"]),
};
