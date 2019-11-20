import React, { Component } from "react";
import "./Content.css";
import MainContent from "../MainContent/MainContent";

export class Content extends Component {
  render() {
    return (
      <div className="Content">
        <MainContent />
      </div>
    );
  }
}

export default Content;
