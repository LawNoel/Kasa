import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Header/Nav";
import listLogement from "../datas/data.json";
import Carrousel from "../components/Carrousel/Carrousel";
import "../styles/FicheLogement.css";

const FicheLogement = () => {
  const logementId = useParams().id;
  console.log(logementId);
  const logement = listLogement.find((logement) => logement.id === logementId);
  console.log(logement);
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement;
  // console.log(logement, title);

  return (
    <div>
      <Nav />
      <Carrousel images={pictures} />
      <div className="info-logement-proprio">
        <div className="info-logement">
          <h1 className="info-logement-titre">{title}</h1>
          <h4 className="info-logement-sous-titre"> {location} </h4>
          <ul>
            <li> {tags} </li>
          </ul>
        </div>
        {/* <div>
          <div>
            <div> {host} </div>
            <div> {rating} </div>
          </div>
        </div> */}
      </div>
      {/* <div>
        <div> {description} </div>
        <div> {equipments} </div>
      </div> */}
    </div>
  );
};

export default FicheLogement;
