import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import P1 from "./component/props/p1";
import Prac from "./component/Form/Prac";
import Pform from "./component/props/Pform";
import Taskform from "./component/props/Taskform";
import T1 from "./component/ag-grid/T1";
import T2 from "./component/ag-grid/T2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <T2 />
  </React.StrictMode>
);

reportWebVitals();
