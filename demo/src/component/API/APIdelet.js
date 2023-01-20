import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function APIdelet() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((e) => setdata(e.data));
  }, []);
  return (
    <div>
      {data.map((e) => {
        return (
          <div>
            <h6>{e.id}</h6>
            <h6>{e.title}</h6>
            <h6>{e.completed}</h6>
          </div>
        );
      })}
    </div>
  );
}
