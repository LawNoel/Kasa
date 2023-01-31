import React from "react";
import "./Banniere.css";

function Banniere({ texte, home }) {
  return (
    <div className={home ? "banniere-home" : "banniere-about"}>
      <div className="banniere-sombre"></div>
      <span className="banniere-txt">{texte}</span>
    </div>
  );
}

export default Banniere;
