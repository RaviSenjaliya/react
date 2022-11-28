import React from "react";

export default function PformD(props) {
  return (
    <div>
      {props.datas.map((val, index) => {
        return (
          <div>
            <div>
              <span>{val.Cname}</span> 👉 <span>{val.Cno}</span>
              <span>
                <button
                  className="btn"
                  onClick={() => {
                    props.delet(index);
                  }}
                >
                  ❌
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
