import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api2() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((e) => setstate(e.data.drinks));
  }, []);
  return (
    <div>
      {state.map((e) => {
        return (
          <>
            <li>{e.idDrink}</li>
            <li>{e.strDrink}</li>
            <hr />
          </>
        );
      })}
    </div>
  );
}
