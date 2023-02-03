// Import de hook useState de react
import React, { useState } from "react";
import ArrowLeft from "../../assets/Arrow-left.png";
import ArrowRight from "../../assets/Arrow-right.png";
import "./Carrousel.css";

// Création de la fonction d'affichage du carrousel
const Carrousel = ({ images }) => {
  // On déclare un hook d'état
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slide">
      <div className="slide-arrow">
        <div className="slide-arrow-left">
          <img
            className="arrows"
            src={ArrowLeft}
            alt="précédent"
            onClick={prev}
            style={{ display: images.length === 1 ? "none" : "block" }}
          />
        </div>

        <div className="slide-arrow-right">
          <img
            className="arrows"
            src={ArrowRight}
            alt="précédent"
            onClick={next}
            style={{ display: images.length === 1 ? "none" : "block" }}
          />
        </div>
      </div>

      <img
        className="slide-img"
        src={images[index]}
        alt="les pièces de l'appartement"
      />
    </div>
  );
};

export default Carrousel;
