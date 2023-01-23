import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/LOGO.png";

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo du site kasa" />
      </div>
      <div className="nav">
        <ul>
          <NavLink to={"/"} className="nav-link">
            <li>Accueil</li>
          </NavLink>
          <NavLink to={"/about"} className="nav-link">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
