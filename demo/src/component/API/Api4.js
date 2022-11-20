import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api4() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((e) => setstate(e.data.data));
  }, []);
  return (
    <div>
      {state.map((e) => {
        return (
          <div>
            <li>{e.Nation}</li>
            <li>{e.Year}</li>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
