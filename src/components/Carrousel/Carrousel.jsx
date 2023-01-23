import React, { useState } from "react";
import ArrowLeft from "../../assets/Arrow-left.png";
import ArrowRight from "../../assets/Arrow-right.png";
import "./Carrousel.css";

const Carrousel = ({ images }) => {
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
  // const [img, setImg] = useState({ url: images[0], index: 0 });
  // const length = images.length;

  // const nextSlide = () => {
  //   setImg(
  //     img.index === length - 1
  //       ? { index: 0, url: images[0] }
  //       : { index: img.index + 1, url: images[img.index + 1] }
  //   );
  // };

  // const prevSlide = () => {
  //   setImg(
  //     img.index === 0
  //       ? { index: length - 1, url: images[length - 1] }
  //       : { index: img.index - 1, url: images[img.index - 1] }
  //   );
  // };

  return (
    <div className="slide">
      <div className="slide-arrow">
        <img
          className="slide-arrow-left"
          src={ArrowLeft}
          alt="précédent"
          onClick={prev}
        />
        <img
          className="slide-arrow-right"
          src={ArrowRight}
          alt="précédent"
          onClick={next}
        />
      </div>

      {/* <img src={img.url} alt="images logement" /> */}
      <img
        className="slide-img"
        src={images[index]}
        alt="les pièces de l'appartement"
      />
    </div>
  );
};

export default Carrousel;
