import React from "react";
import "./Courses.css";

function Courses(props) {
  return (
    <div>
      <button
        className="course-name-list"
        onClick={() => props.click(props.id - 1)}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Courses;
