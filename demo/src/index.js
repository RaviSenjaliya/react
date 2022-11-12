import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Stat from "./component/stat";
import Counter from "./component/Counter";
import Txchange from "./component/Txchange";
import Mapdata from "./component/Map";
import Cardscrol from "./component/Cardscrol";
import Food from "./pages/Food";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Stat /> */}
    {/* <Counter /> */}
    {/* <Txchange /> */}
    {/* <Mapdata /> */}
    {/* <Cardscrol /> */}
    <Food />
  </React.StrictMode>
);

reportWebVitals();
