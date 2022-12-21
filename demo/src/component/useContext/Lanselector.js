import React from "react";
import changelang from "./creatContextt";
import { useContext } from "react";

const Lanselector = () => {
  const { lan, setlan } = useContext(changelang);
  const handler = (e) => {
    setlan(e.target.value);
  };
  return (
    <div>
      <select onChange={handler}>
        <option value="en">English</option>
        <option value="hin">Hindi</option>
        <option value="guj">Gujrati</option>
      </select>
    </div>
  );
};

export default Lanselector;
