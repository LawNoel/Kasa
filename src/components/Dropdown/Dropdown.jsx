import React, { useState } from "react";
import ArrowDown from "../../assets/Arrow-down.png";
import ArrowUp from "../../assets/Arrow-up.png";
import "./Dropdown.css";

const Dropdown = ({ titre, description }) => {
  // Hook d'état
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-titre-arrow">
        <h4 className="dropdown-titre"> {titre} </h4>
        <div
          className="dropdown-arrow"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={ArrowDown} alt="afficher la description" />
        </div>
      </div>

      <div
        className="dropdown-description"
        style={{ display: open ? "block" : "none" }}
      >
        {description}
      </div>
    </div>
  );
};

export default Dropdown;
