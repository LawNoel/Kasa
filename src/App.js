// import de la librairie react
import React from "react";
// import des routes grâce à react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import des pages Home, About, FicheLogement et Error
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
// import de App.css
import "./App.css";

// Création de la fonction App gérant les routes des pages
const App = () => {
  return (
    // Création du router
    <BrowserRouter>
      {/* Création des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
