import React from "react";
import { useState } from "react";

const Txchange = () => {
  const [Input, setInput] = useState("");
  const [Output, setOutput] = useState("");

  //   ====================================================

  const myfun = (e) => {
    setInput(e.target.value);
  };

  //  ========================================================

  const change = () => {
    let reverse = Input.split("").reverse("").join("");
    let img = (
      <img
        src="https://i.pinimg.com/originals/60/58/0e/60580ebe35939188b48a2927fc80e27e.gif"
        className="w-25"
        alt=""
      />
    );
    let img2 = (
      <img
        src="https://media2.giphy.com/media/U6Mgz20vvIhMnl3SrV/giphy.gif?cid=6c09b952bc580ab93f8aa0111986de6721f7913b75ebdc58&rid=giphy.gif&ct=g"
        className="w-25"
        alt=""
      />
    );
    let img3 = (
      <img
        src="https://media0.giphy.com/media/chPcL561rLaIqbuUxp/giphy.gif?cid=6c09b952dsv4clcmocbe6pijh1v7gvuhlpfqgy70hdq8we0n&rid=giphy.gif&ct=s"
        className="w-25"
        alt=""
      />
    );
    // reverse == Input ? setOutput(img) : setOutput(img2);
    if (Input == "") {
      setOutput(img3);
    } else if (reverse == Input) {
      setOutput(img);
    } else {
      setOutput(img2);
    }
  };

  return (
    <div className="ravi p-5 mt-5">
      <h1>{Output}</h1>
      <input
        type="text"
        className="form-control"
        value={Input}
        onChange={myfun}
      />
      <button className="btn btn-danger w-100 mt-2" onClick={change}>
        Click Me
      </button>
    </div>
  );
};

export default Txchange;
