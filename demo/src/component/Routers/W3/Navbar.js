import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar container p-3 rounded-3 mt-3  navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <span className="bg-success p-1 text-white rounded-5">W</span>3Schoole
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
              <Link class="nav-link " to="/HTML">
                HTML
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/CSS">
                CSS
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/HTML"
              >
                HTML
              </Link>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="Tutorial">
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="Introduction">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="Editors">
                    Editors
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
