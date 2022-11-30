import React from "react";
import { useEffect, useState } from "react";

const API2 = () => {
  const [data, setdata] = useState([]);
  const [findd, setfindd] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((e) => {
        setdata(e);
      });
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
            .filter((v) => {
              return v.name.toUpperCase().indexOf(findd.toUpperCase()) >= 0;
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

export default API2;
