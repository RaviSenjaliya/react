import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api4() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((e) => setstate(e.data));
  }, []);
  return (
    <div>
      {state.map((e) => {
        return (
          <div>
            <li>{e.userId}</li>
            <li>{e.title}</li>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
