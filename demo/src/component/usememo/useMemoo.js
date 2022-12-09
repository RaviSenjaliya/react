import React, { useMemo } from "react";
import { useState } from "react";

export default function UseMemoo(props) {
  const [see, setsee] = useState(false);
  const use = useMemo(() => {
    console.log("hello");
    return props.text.slice(0, 20).concat("....");
  }, []);
  return (
    <div>
      <h1
        onClick={() => {
          setsee(!see);
        }}
      >
        {see ? props.text : use}
      </h1>
    </div>
  );
}
