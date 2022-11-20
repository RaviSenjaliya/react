import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api5() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://date.nager.at/api/v2/publicholidays/2020/US")
      .then((e) => setstate(e.data));
  }, []);
  return (
    <div>
      {state.map((e) => {
        return (
          <div>
            <li>{e.date}</li>
          </div>
        );
      })}
    </div>
  );
}
