import React from "react";
import Nav from "../components/Header/Nav";
import "../styles/Home.css";
import imageAccueil from "../assets/IMG.png";
import Banniere from "../components/Bannieres/Banniere";
import listLogement from "../datas/data";
import Card from "../components/Cards/Card";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banniere
        home={true}
        image={imageAccueil}
        texte="Chez vous, partout et ailleurs"
      />
      <div className="liste-logements">
        {listLogement.map((logements, id) => {
          return (
            <NavLink key={id} to={`/logement/${logements.id}`}>
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
