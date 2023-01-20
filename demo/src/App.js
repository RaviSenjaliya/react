import "./App.css";
import API1 from "./component/API/API1";
import Api2 from "./component/API/Api2";
import Api3 from "./component/API/Api3";
import Api4 from "./component/API/Api4";
import Api5 from "./component/API/Api5";
import { useState } from "react";
import changelang from "./component/useContext/creatContextt";
import Lanselector from "./component/useContext/Lanselector";
import Ch1 from "./component/useContext/Ch1";

export default function App() {
  // const [lan, setlan] = useState("en");
  return (
    <div className="text-center">
      <h3>Ravi senjaliya</h3>

      {/* <changelang.Provider value={{ lan, setlan }}>
        <Lanselector />
        <br />
        <Ch1 />
      </changelang.Provider> */}
    </div>
  );
}
