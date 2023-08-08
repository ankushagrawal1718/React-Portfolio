import "./ProjectCardStyle.css";
import { NavLink } from "react-router-dom";

import React from "react";

const PorjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>
         {props.text}
        </p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.view} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PorjectCard;
