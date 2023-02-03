import React from "react";
import "./Card.css";

// Création de la fonction d'affichage des cartes de logements
const Card = ({ logements }) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={logements.cover}
        alt={"photo " + logements.title}
      />
      <div className="card-bg"></div>
      <h4 className="card-titre"> {logements.title} </h4>
    </div>
  );
};

export default Card;
