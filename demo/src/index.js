import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Counter from "./component/Counter";
import Txchange from "./component/Txchange";
import Cardscrol from "./component/Cardscrol";
import Food from "./pages/Food";
import API from "./component/API";
import Mydata from "./component/datafilter";
import API2 from "./component/API2";
import Axioss from "./component/axioss";
import Formm from "./component/Form";
import Form2 from "./component/Formm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Txchange /> */}
    {/* <Mydata /> */}
    {/* <API2 /> */}
    {/* <Axioss /> */}
    {/* <Mydata /> */}
    {/* <Formm /> */}
    <Form2 />
    {/* <Cardscrol /> */}
    {/* <API /> */}
  </React.StrictMode>
);

reportWebVitals();
