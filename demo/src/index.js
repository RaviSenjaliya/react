import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./component/post/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MU1 from "./component/MU/MU1";
import Memo from "./component/MU/memo";
import UseMemoo from "./component/usememo/useMemoo";
import { Provider } from "react-redux";
import CountingRX from "./CountingRX";
import store from "./component/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <CountingRX />
    </Provider>
    {/* <UseMemoo text="people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the tim" /> */}
  </React.StrictMode>
);

reportWebVitals();
