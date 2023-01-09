import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Api2() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((x) => setstate(x.data.data));
  }, []);
  return (
    <div>
      {state.map((e) => {
        return (
          <div>
            <h1>{e.Nation}</h1>;
          </div>
        );
      })}
    </div>
  );
}
