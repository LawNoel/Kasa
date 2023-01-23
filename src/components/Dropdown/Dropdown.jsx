import React, { useState } from "react";
import fleche from "../../assets/Arrow-down.png";
import "./Dropdown.css";

const Dropdown = ({ titre, description }) => {
  // Hook d'état
  const [open, setOpen] = useState(false);
  return (
    <div className="box">
      <div className="dropdown">
        <div className="dropdown-titre-arrow">
          <h4 className="dropdown-titre"> {titre} </h4>
          <div
            className="dropdown-arrow"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={fleche} alt="afficher la description" />
          </div>
        </div>

        <div
          className="dropdown-description"
          style={{ display: open ? "block" : "none" }}
        >
          {" "}
          {description}{" "}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
