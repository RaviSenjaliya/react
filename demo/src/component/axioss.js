import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Axioss = () => {
  const [data, setdata] = useState([]); //{} na karvu hoy tooo//
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((v) => {
      setdata(v.data); // data.xyz lakhvu padej//
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            //karo to ? lagavi ne xyz ma pan ? lagavo jethi check kare ke data chhe ke nay //
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.body}</td>
                <hr />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Axioss;
