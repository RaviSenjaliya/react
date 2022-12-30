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
// ------------------------------------------------------------------
import { Provider } from "react-redux";
import CountingRX from "./CountingRX";
import store from "./component/store/store";
import Signup from "./component/post/signup";
import SingIN from "./component/registrationToken/SingIN";
import LogIN from "./component/registrationToken/LogIN";
// -----------------------------------------------------------------
import Globle from "./component/Axios/Globle";
import VideoPlayer from "./component/useRef/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Routers/Header";
import Home from "./component/Routers/Home";
import About from "./component/Routers/About";
import Contact from "./component/Routers/Contact";
import Footer from "./component/Routers/Footer";
import Error from "./component/Routers/Error";
import Users from "./component/Routers/Users";
import SigUp from "./component/Routers/SigUp";
import Loginn from "./component/Routers/Login";
import HtML from "./component/Routers/W3/HTML";
import CSs from "./component/Routers/W3/CSS";
import Navbar from "./component/Routers/W3/Navbar";
import Tutorial from "./component/Routers/W3/HTML/Tutorial";
import Introduction from "./component/Routers/W3/HTML/Introduction";
import Editors from "./component/Routers/W3/HTML/Editors";
import FNav from "./component/Routers/form/FNav";
import RequireAuth from "./component/Routers/private/Autho";
import Product from "./component/Routers/form/Product";
import FileUp from "./component/fileUpload/FileUp";
import MyHoc from "./component/HOC/HocNav";
import ErrorBoundry from "./component/ErrorHandle/ErrorBoundry";
import Errorr from "./component/ErrorHandle/Errorr";
import CustomeAPI from "./component/CustomHook/CustomeAPI";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";
import { ErrorInstall } from "./component/ErrorHandle/ErrorInstall";
import ThunkCounter from "./component/ReduxThunk/ThunkCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let HOCAbout = MyHoc(About);
// let HOCHome = MyHoc(Home);
// let HOCContact = MyHoc(Contact);

// const LzCSS = React.lazy(() => import("./component/Routers/W3/CSS"));
// const LzHTML = React.lazy(() => import("./component/Routers/W3/HTML"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThunkCounter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

{
  /* <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/HTML" element={<LzHTML />}>
            <Route path="Tutorial" element={<Tutorial />}></Route>
            <Route path="Introduction" element={<Introduction />}></Route>
            <Route path="Editors" element={<Editors />}></Route>
          </Route>
          <Route path="/CSS" element={<LzCSS />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter> */
}

{
  /* <ErrorBoundary FallbackComponent={ErrorInstall}>
      <Errorr />
      <CustomeAPI />
    </ErrorBoundary> */
}
