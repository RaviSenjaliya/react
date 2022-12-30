import React from "react";
import UseFetch from "./useFetch";

const CustomeAPI = () => {
  const { Load, Data } = UseFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {Data.map((e) => {
        return (
          <div>
            <ul>
              <li>{e.name}</li>
              <li>{e.username}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CustomeAPI;
