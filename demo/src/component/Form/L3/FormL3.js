import React from "react";
import { useState } from "react";

export default function FormL3() {
  const [data, setdata] = useState([
    {
      Coursename: "",
      year: "",
      percentage: "",
      grade: "",
    },
  ]);

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const mysubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };
  const add = (e) => {
    let datas = {
      Coursename: "",
      year: "",
      percentage: "",
      grade: "",
    };
    setdata([...data, datas]);
  };
  return (
    <div>
      {data.map((val) => {
        return (
          <div>
            <form onSubmit={mysubmit}>
              <input
                type="text"
                name={val.Coursename}
                placeholder="Coursename"
                onChange={handler}
              />
              <input
                type="text"
                name={val.Year}
                placeholder="Year"
                onChange={handler}
              />
              <input
                type="text"
                name={val.percentage}
                placeholder="%"
                onChange={handler}
              />
              <input
                type="text"
                name={val.grade}
                placeholder="grade"
                onChange={handler}
              />
              <input type="submit" value="save" />
            </form>
            <button onClick={add}>add</button>
          </div>
        );
      })}
    </div>
  );
}
