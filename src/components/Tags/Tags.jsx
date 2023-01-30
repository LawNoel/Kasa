import React from "react";
import "./Tags.css";

const Tags = ({ allTag }) => {
  return (
    <div className="tag">
      <div className="tag-display"> {allTag} </div>
    </div>
  );
};

export default Tags;
