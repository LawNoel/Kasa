import React from "react";
// Import du composant NavLink de react
import { NavLink } from "react-router-dom";
// Import du fichier Json
import listLogement from "../datas/data";
// Import des composants Nav, Banniere, Card et Footer
import Nav from "../components/Header/Nav";
import Banniere from "../components/Bannieres/Banniere";
import Card from "../components/Cards/Card";
import Footer from "../components/Footer/Footer";
import "../styles/Home.css";

// Création de la page d'accueil
const Home = () => {
  return (
    <div>
      <Nav />
      <Banniere home={true} texte="Chez vous, partout et ailleurs" />
      <div className="liste-logements">
        {listLogement.map((logements, id) => {
          return (
            <NavLink
              className="cards"
              key={id}
              to={`/logement/${logements.id}`}
            >
              {" "}
              <Card logements={logements} />
            </NavLink>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
