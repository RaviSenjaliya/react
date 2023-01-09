import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function API1() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get("https://api2.binance.com/api/v3/ticker/24hr")
      .then((e) => setstate(e.data));
  }, []);

  return (
    <div>
      {state.map((val) => {
        return (
          <ul>
            <li>{val.symbol}</li>
            <li>{val.priceChange}</li>
            <li>{val.priceChangePercent}</li>
          </ul>
        );
      })}
    </div>
  );
}
