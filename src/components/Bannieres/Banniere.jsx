import React from "react";
import "./Banniere.css";

// Création de la fonction d'afficjage de la bannière
function Banniere({ texte, home }) {
  return (
    // Condition d'affichage entre la bannière de la page d'accueil et à propos
    <div className={home ? "banniere-home" : "banniere-about"}>
      <div className="banniere-sombre"></div>
      <span className="banniere-txt">{texte}</span>
    </div>
  );
}

export default Banniere;
