import React from "react";
import { Outlet, Link } from "react-router-dom";
import CustComLink from "./CustomLink/CustomLink";

export default function Header() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <CustComLink className="nav-link" to="/">
                Home
              </CustComLink>
            </li>
            <li className="nav-item active">
              <CustComLink className="nav-link" to="/About">
                About
              </CustComLink>
            </li>
            <li className="nav-item active">
              <CustComLink className="nav-link" to="/Contact">
                Contact
              </CustComLink>
            </li>
            <li className="nav-item active">
              <CustComLink className="nav-link" to="/Users">
                Users
              </CustComLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
