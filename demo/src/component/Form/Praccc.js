import React from "react";
import { useState } from "react";
import Praccc2 from "./Praccc2";

const Praccc = () => {
  const [state, setstate] = useState({
    name: "",
    fname: "",
    hobbi: [],
  });
  const [search, setsearch] = useState("");
  const [Data, setData] = useState([]);
  const [Add, setAdd] = useState(-1);
  const [vali, setvali] = useState({
    name: "",
    fname: "",
  });
  // const [store, setstore] = useState([]);

  const del = (index) => {
    let val = [...Data];
    val.splice(index, 1);
    setData(val);
  };

  const add = (index) => {
    let val = Data[index];
    setstate(val);
    setAdd(index);
  };

  const change = (e) => {
    e.preventDefault();
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const Search = (e) => {
    setsearch(e.target.value);
  };
  // const change = (e) => {
  //   if (e.target.name == "hobbi") {
  //     let data = state.hobbi;
  //     if (e.target.checked) {
  //       data.push(e.target.value);
  //       setstate({ ...state, hobbi: data });
  //     } else {
  //       let x = data.filter((vv) => {
  //         return vv != e.target.value;
  //       });
  //       setstate({ ...state, hobbi: x });
  //     }
  //   } else {
  //     setstate({ ...state, [e.target.name]: e.target.value });
  //     if (e.target.value == "") {
  //       setvali({ ...vali, [e.target.name]: `${e.target.name} is requird` });
  //     } else if (
  //       /^[a-zA-Z]+$/.test(e.target.value) == false &&
  //       e.target.name == e.target.name
  //     ) {
  //       setvali({ ...vali, [e.target.name]: `${e.target.name} is NAN` });
  //     } else {
  //       setvali({ ...vali, [e.target.name]: "" });
  //     }
  //   }
  // };
  const sub = (e) => {
    e.preventDefault();
    if (Add >= 0) {
      let x = [...Data];
      x[Add].fname = state.fname;
      x[Add].name = state.name;
    } else {
      let val = [...Data];
      val.push(state);
      setData(val);
    }
    // setstore((e) => [...e, state]);
    // localStorage.setItem("myallData", JSON.stringify(store));
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={sub}>
        <input type="text" value={state.name} name="name" onChange={change} />
        <p>{vali.name}</p>
        <input type="text" name="fname" value={state.fname} onChange={change} />
        <p>{vali.fname}</p>
        <br />
        <input type="checkbox" name="hobbi" value="criket" onClick={change} />
        criket
        <input type="checkbox" name="hobbi" value="drowing" onClick={change} />
        drowing
        <br />
        <input type="submit" value="save" />
      </form>
      <input type="text" onChange={Search} value={search} />
      {/* <div>{localStorage.getItem("myallData", state)}</div> */}
      <Praccc2 alldata={Data} delet={del} add={add} search={search} />
    </div>
  );
};

export default Praccc;
