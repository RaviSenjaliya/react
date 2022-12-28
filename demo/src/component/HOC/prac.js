import React from "react";
import Header from "../Routers/Header";

const mydata = (Datas) => () => {
  <div>
    <Header />
    <Datas />
  </div>;
};
export default mydata;
