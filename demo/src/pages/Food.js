import React from "react";
import menu from "./data";
import "./food.css";

import r from "./test/item-1.jpeg";

export default function Food() {
  if (condition) {
  } else {
  }
  return (
    <>
      <section className="menu">
        {/* <!-- title --> */}
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- filter buttons --> */}
        <div class="btn-container">
          <button type="button" className="filter-btn" data-id="all">
            all
          </button>
          <button type="button" className="filter-btn" data-id="breakfast">
            breakfast
          </button>
          <button type="button" className="filter-btn" data-id="lunch">
            lunch
          </button>
          <button type="button" className="filter-btn" data-id="shakes">
            shakes
          </button>
        </div>
        {/* <!-- menu items --> */}
        <div className="section-center">
          {menu.map((val) => {
            return (
              <article className="menu-item">
                <img src={r} alt="menu item" className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{val.title}</h4>
                    <h4 className="price">{val.price}</h4>
                  </header>
                  <p className="item-text">{val.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
