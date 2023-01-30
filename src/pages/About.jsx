import React from "react";
import Nav from "../components/Header/Nav";
import Banniere from "../components/Bannieres/Banniere";
import imageAbout from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Nav />
      <Banniere image={imageAbout} />
      <div className="box">
        <Dropdown
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
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
