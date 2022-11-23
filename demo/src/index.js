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
import Exam from "./component/Exam";
import Exam2 from "./component/Exam2";
import Select from "./component/Form/select";
import Selectt from "./component/Form/select";
import Ftask from "./component/Form/select2";
import FFormik from "./component/Form/Formik";

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
    {/* <Form2 /> */}
    {/* <Mydata /> */}
    {/* <Cardscrol /> */}
    {/* <API /> */}
    {/* <Exam2 /> */}
    {/* <Selectt /> */}
    {/* <Ftask /> */}
    <FFormik />
    {/* <Exam /> */}
  </React.StrictMode>
);

reportWebVitals();
