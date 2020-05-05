import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Banner } from "../banner/Banner";

export function Nav() {
  return (
    <div>
      <div className="container">
        <ul className="menuItems">
          <li>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/like" activeClassName="active">
              Like Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalouge" activeClassName="active">
              Catalouge
            </NavLink>
          </li>
          <li>
            <a href="">Mags</a>
          </li>
          <li>
            <a href="">TBC</a>
          </li>
        </ul>
      </div>
      <Banner />
    </div>
  );
}
