import React from "react";
import "./Details.css";

function Details(props) {
  return (
    <div className="Details">
      <div className="cou-details">
        <h3 className="course-details">COURSE DETAILS</h3>

        <div className="coursers-list">
          <span>Length: {props.course.length} days</span>
        </div>
      </div>
      <h1 className="course-name">{props.course.name}</h1>
      <p className="cou-det-par">{props.course.desc}</p>
    </div>
  );
}

export default Details;
