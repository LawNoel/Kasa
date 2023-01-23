import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Nav";
import "../styles/Error.css";

const Error = () => {
  return (
    <div>
      <Nav />
      <div className="error">
        <h1 className="error-titre">404</h1>
        <div className="error-description">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink to="/" className="error-home">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
