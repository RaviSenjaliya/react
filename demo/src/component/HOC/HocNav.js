import React from "react";
import Footer from "../Routers/Footer";
import Header from "../Routers/Header";

const MyHoc = (Component) => () =>
  (
    <div>
      <Header />
      <div>
        <Component />
      </div>
      <Footer />
    </div>
  );

export default MyHoc;
