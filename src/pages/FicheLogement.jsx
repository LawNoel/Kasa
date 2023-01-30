import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Header/Nav";
import listLogement from "../datas/data.json";
import Carrousel from "../components/Carrousel/Carrousel";
import "../styles/FicheLogement.css";
import Tags from "../components/Tags/Tags";
import StarRating from "../components/StarRating/StarRating";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";

const FicheLogement = () => {
  const logementId = useParams().id;

  const logement = listLogement.find((logement) => logement.id === logementId);

  const { title, pictures, description, host, location } = logement;

  return (
    <div>
      <Nav />
      <Carrousel images={pictures} />
      <div className="info-logement">
        <div className="info-logement-info">
          <h1 className="info-logement-titre">{title}</h1>
          <h4 className="info-logement-location"> {location} </h4>
          <div className="info-logement-tags">
            {logement.tags.map((tag, index) => (
              <Tags key={index} allTag={tag} />
            ))}
          </div>
        </div>
        <div className="info-logement-host-rating">
          <div className="info-logement-host">
            <div className="host-name"> {host.name} </div>
            <img className="host-picture" src={host.picture} alt="host" />
          </div>
          <div className="info-logement-rating">
            <StarRating rate={logement.rating} />
          </div>
        </div>
      </div>
      <div className="description-equipement">
        <Dropdown
          titre={"Description"}
          description={description}
          className="description"
        />
        <Dropdown
          titre={"Équipements"}
          description={logement.equipments.map((list) => (
            <li key={list}> {list} </li>
          ))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogement;
