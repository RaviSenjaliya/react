import React from "react";

function MemoD(data) {
  console.log(data);
  return (
    <div>
      <div>
        {data.data.map((val, index) => {
          <h1>{val}</h1>;
          <button
            onClick={() => {
              data.remove(index);
            }}
          ></button>;
        })}
      </div>
    </div>
  );
}

export default React.memo(MemoD);
