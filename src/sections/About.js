import React, { Component } from "react";
import FullPage from "../components/FullPage";
import { Element } from "react-scroll";


import "./About.css";

import data from "../data.json";

class About extends Component {
  render() {
    return (
      <Element id="about" name="about">
        <FullPage>
          <h1 className="palete2 heading">{data.AboutPage.items.title}</h1>
          <div>
            <p className="palete3 text">{data.AboutPage.items.text}</p>
          </div>
        </FullPage>
      </Element>
    );
  }
}

export default About;
