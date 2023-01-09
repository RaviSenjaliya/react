import React from "react";

const Praccc2 = (props) => {
  return (
    <div>
      {props.alldata
        .filter((e) => {
          return e.name.toUpperCase().indexOf(props.search.toUpperCase()) >= 0;
        })
        .map((val, index) => {
          return (
            <div>
              <p>{val.name}</p>
              <p>{val.fname}</p>
              <button
                onClick={() => {
                  props.delet(index);
                }}
              >
                delet
              </button>
              <button
                onClick={() => {
                  props.add(index);
                }}
              >
                add
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Praccc2;
