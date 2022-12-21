import React from "react";
import changelang from "./creatContextt";
import { useContext } from "react";

const LangForm = () => {
  const { lan } = useContext(changelang);
  const mydata = {
    en: {
      firstName: "FirstName",
      lastName: "lastName",
    },

    hin: {
      firstName: "पहला नाम",
      lastName: "उपनाम",
    },
    guj: {
      firstName: "પ્રથમ નામ",
      lastName: "છેલ્લું નામ",
    },
  };

  return (
    <div>
      <form>
        <label>{mydata[lan].firstName}</label>
        <input type="text" />
        <br />
        <label>{mydata[lan].lastName}</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default LangForm;
