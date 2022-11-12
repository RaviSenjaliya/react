import React from "react";
import "./Cardscrol.css";
import reviews from "./data";
import { useState } from "react";

export default function Cardscrol() {
  const [Index, setIndex] = useState(0);
  const next = () => {
    debugger;
    Index >= reviews.length - 1 ? setIndex(0) : setIndex(Index + 1);
  };
  const pre = () => {
    Index <= 0 ? setIndex(reviews.length - 1) : setIndex(Index - 1);
  };

  return (
    <div>
      <section className="container">
        <article className="revieww">
          <div className="img-container">
            <img src={reviews[Index].img} id="person-img" alt="" />
          </div>
          <h4 id="author">{reviews[Index].name}</h4>
          <p id="job">{reviews[Index].job}</p>
          <p id="info">{reviews[Index].text}</p>
          {/* <!-- prev next buttons--> */}
          <div className="button-container">
            <button className="prev-btn" onClick={pre}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={next}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
          {/* <!-- random button --> */}
          <button className="random-btn">surprise me</button>
        </article>
      </section>
    </div>
  );
}
