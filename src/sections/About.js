import React, { Component } from "react";
import FullPage from "../components/FullPage";

import "./About.css";

import data from "../data.json";

class About extends Component {
  render() {
    return (
      <FullPage>
        <h1 className="palete2">{data.AboutPage.items.title}</h1>
        <div>
          <p className="palete3">{data.AboutPage.items.text}</p>
        </div>
      </FullPage>
    );
  }
}

export default About;
