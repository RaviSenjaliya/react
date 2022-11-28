import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Exam() {
  const [datass, setdatass] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.fda.gov/food/enforcement.json?limit=10")
      .then((e) => {
        setdatass(e.data.results);
      });
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>country</td>
          <td>city</td>
          <td>address_1</td>
          <td>address_2</td>
          <td>product_quantity</td>
          <td>code_info</td>
          <td>center_classification_date</td>
          <td>distribution_pattern</td>
          <td>state</td>
        </tr>
      </thead>
      <tbody>
        {datass.map((val) => {
          return (
            <tr>
              <td>{val.country}</td>
              <td>{val.city}</td>
              <td>{val.address_1}</td>
              <td>{val.address_2}</td>
              <td>{val.product_quantity}</td>
              <td>{val.code_info}</td>
              <td>{val.center_classification_date}</td>
              <td>{val.distribution_pattern}</td>
              <td>{val.state}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
