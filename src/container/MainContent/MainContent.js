import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Details/Details";
import AddCourse from "../../components/AddCourse/AddCourse";

import "./MainContent.css";

class MainContent extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: "HTML",
        length: 7,
        desc:
          "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
      },
      {
        id: 2,
        name: "CSS",
        length: 8,
        desc:
          "CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural conten           Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. "
      },
      {
        id: 3,
        name: "JS",
        length: 15,
        desc:
          "Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion. This allowing the pages to react to events, exhibit special effects, accept variable text, validate data, create cookies, detect a user’s browser, etc.There are two ways to use JavaScript in an HTML file. "
      },
      {
        id: 4,
        name: "REACT",
        length: 13,
        desc:
          "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications, as it's optimal only for its intended use of being the quickest method to fetch rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API"
      }
    ],
    currentSelectedId: 1,
    tempName: "",
    tempLength: "",
    tempDesc: ""
  };

  handleSelected = id => {
    this.setState({ currentSelectedId: id });
  };
  handleChangeName = e => {
    this.setState({ tempName: e.target.value });
    console.log(this.state.tempName);
  };
  handleChangeLength = e => {
    this.setState({ tempLength: e.target.value });
    console.log(this.state.tempLength);
  };
  handleChangeDesc = e => {
    this.setState({ tempDesc: e.target.value });
    console.log(this.state.tempDesc);
  };
  handleSubmitNew = e => {
    e.preventDefault();
    if (
      this.state.tempName === "" ||
      this.state.tempLength === "" ||
      this.state.tempDesc === ""
    ) {
      alert("Please Enter All Fields");
    } else {
      const courses = [...this.state.courses];
      const newCourse = {
        id: courses.length + 1,
        name: this.state.tempName,
        length: this.state.tempLength,
        desc: this.state.tempDesc
      };
      courses.push(newCourse);
      this.setState({ courses });
      this.setState({ tempName: "" });
      this.setState({ tempLength: "" });
      this.setState({ tempDesc: "" });
    }
  };
  render() {
    return (
      <div className="MainContent">
        <Header />
        <div className="course-details-content">
          <div className="Courses">
            <h3 className="courses-heading">COURSES:</h3>

            <div className="coursers-list">
              {this.state.courses.map(course => (
                <Courses
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  click={this.handleSelected}
                />
              ))}
            </div>
          </div>
          <Details course={this.state.courses[this.state.currentSelectedId]} />
        </div>
        <AddCourse
          submit={this.handleSubmitNew}
          name={this.state.tempName}
          handleName={this.handleChangeName}
          length={this.state.tempLength}
          handleLength={this.handleChangeLength}
          desc={this.state.tempDesc}
          handleDesc={this.handleChangeDesc}
        />
      </div>
    );
  }
}

export default MainContent;
