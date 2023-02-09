import React from "react";
import Nav from "../components/Header/Nav";
import Banniere from "../components/Bannieres/Banniere";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";
import AboutData from "../datas/about.json";
import "../styles/About.css";

// Création de la page à propos
const About = () => {
  return (
    <div>
      <Nav />
      <Banniere />
      <div className="box">
        {AboutData.map((data, indexData) => {
          return (
            <Dropdown
              key={indexData}
              titre={data.titre}
              description={data.description}
            />
          );
        })}
        {/* <Dropdown
          titre={"Fiabilité"}
          description={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Dropdown
          titre={"Respect"}
          description={
            "La bienveillance fait partie des  valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Dropdown
          titre={"Service"}
          description={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfait. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Dropdown
          titre={"Sécurité"}
          description={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont aussi bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        /> */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
