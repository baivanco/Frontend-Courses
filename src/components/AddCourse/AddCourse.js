import React from "react";
import "./AddCourse.css";

function AddCourse(props) {
  return (
    <div className="add-course">
      <h2>Add New Course</h2>

      <form onSubmit={props.submit}>
        <label>Course Name:</label>
        <input
          placeholder="Enter Name..."
          name="name"
          value={props.name}
          onChange={props.handleName}
          maxLength="10"
        />
        <label>Length:</label>
        <input
          placeholder="Days..."
          name="length"
          value={props.length}
          onChange={props.handleLength}
          type="number"
          min="1"
          max="30"
        />

        <hr />
        <br />

        <label>Description:</label>
        <br />
        <textarea
          placeholder="Please Enter Description Here... "
          name="desc"
          value={props.desc}
          onChange={props.handleDesc}
          rows="8"
          cols="150"
          maxLength="300"
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCourse;
