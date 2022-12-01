import React, { Component } from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const T2 = () => {
  const [row, setrow] = useState([]);
  const [col, setcol] = useState([
    { field: "albumId", filter: "agNumberColumnFilter" },
    { field: "title", filter: true, sortable: true },
    { cellRenderer: RainPerTenMmRenderer, width: 180 },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((y) => y.json())
      .then((y) => setrow(y));
  }, []);
  //   ===============================================================================
  return (
    <div className="ag-theme-alpine" style={{ width: 900, height: 500 }}>
      <AgGridReact rowData={row} columnDefs={col} />
    </div>
  );
};

class RainPerTenMmRenderer {
  init(params) {
    const rainPerTenMm = params.value / 10;
    this.eGui = createImageSpan(rainPerTenMm, params.url);
  }
  getGui() {
    return this.eGui;
  }
}
export default T2;
