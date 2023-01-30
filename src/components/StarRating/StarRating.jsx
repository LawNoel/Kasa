import React from "react";
import GreyStar from "../../assets/GreyStar.png";
import RedStar from "../../assets/RedStar.png";

const StarRating = ({ rate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((element, i) =>
        i < rate ? (
          <img className="stars" key={i} src={RedStar} alt="étoiles rouges" />
        ) : (
          <img className="stars" key={i} src={GreyStar} alt="étoiles grises" />
        )
      )}
    </div>
  );
};

export default StarRating;
