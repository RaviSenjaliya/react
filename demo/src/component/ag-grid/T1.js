import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const T1 = () => {
  const [row, setrow] = useState([]);

  const [col, setcol] = useState([
    { field: "postId", filter: "agNumberColumnFilter" },
    { field: "name", filter: true, sortable: true },
    { field: "body", filter: true, sortable: true },
    { field: "email", filter: true, sortable: true },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((y) => y.json())
      .then((y) => setrow(y));
  }, []);
  return (
    <div className="ag-theme-alpine" style={{ width: 900, height: 500 }}>
      <AgGridReact rowData={row} columnDefs={col} />
    </div>
  );
};

export default T1;
