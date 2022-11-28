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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pform />
  </React.StrictMode>
);

reportWebVitals();
