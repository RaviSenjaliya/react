import React, { useState, useEffect } from "react";

export default function DataCounter(props) {
  const [Data, setData] = useState([]);

  console.log(props);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=" + props.datas)
      .then((y) => y.json())
      .then((y) => {
        setData(y);

        console.log(y);
      });
  }, [props.datas]);

  return <div>dataCounter</div>;
}
