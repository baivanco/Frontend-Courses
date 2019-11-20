import React, { Component } from "react";
import "./Main.css";
import Content from "../Content/Content";
import Footer from "../../components/Footer/Footer";

class Main extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + require(`./backgr.jpeg`) + ")"
        }}
      >
        <div>
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
