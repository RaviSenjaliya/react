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
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
            <td>delet</td>
          </tr>
        </thead>
        <tbody>
          {state.map((val) => {
            return (
              <tr>
                <td>{val.symbol}</td>
                <td>{val.priceChange}</td>
                <td>{val.completed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
