import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api3() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
      )
      .then((e) => setstate(e.data));
  }, []);
  return (
    <>
      {state.map((e) => {
        return (
          <div>
            <li>{e.disclosure_year}</li>
            <li>{e.disclosure_date}</li>
            <hr />
          </div>
        );
      })}
    </>
  );
}
