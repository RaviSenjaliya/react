import React from "react";
import { useEffect, useState } from "react";

const API22 = () => {
  const [data, setdata] = useState([]);
  const [findd, setfindd] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((x) => x.json())
      .then((x) => setdata(x));
  }, []);
  //   ======================================
  const myfun = (h) => {
    setfindd(h.target.value);
  };

  return (
    <div>
      <input
        className="w-50 p-2 rounded-2 mt-4"
        type="text"
        onChange={myfun}
        value={findd}
      />

      {/* ========================================================== */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {/* ------------------------------------------------------------------------------- */}
          {data
            .filter((e) => {
              return e.name.toUpperCase().indexOf(findd.toUpperCase()) >= 0;
            })
            .map((v) => {
              return (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.username}</td>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td>{v.website}</td>
                </tr>
              );
            })}
          {/* -------------------------------------------------------------------------------- */}
        </tbody>
      </table>
    </div>
  );
};

export default API22;
