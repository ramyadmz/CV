import React, { Component } from "react";
import FullPage from "../components/FullPage";
import ScrollDown from "../components/ScrollDown";
import { Element } from "react-scroll";
import { SocialMediaIconsReact } from "social-media-icons-react";
import "./FirstPage.css";
import "./theme.css";
import data from "../data.json";

class FirstPage extends Component {
  render() {
    return (
      <div>
        <Element id="home" name="home">
          <FullPage>
            <h1 className="palete2 heading">{data.FirstPage.items.title}</h1>
            <div>
              <p className="palete3 heading">
                {data.FirstPage.items.subtitle}
              </p>
            </div>
            <div className="icons-wrapper">
              {Object.keys(data.FirstPage.items.links).map((key) => {
                return (
                  <div className="icon">
                    <SocialMediaIconsReact
                      icon={key}
                      url={data.FirstPage.items.links[key]}
                    />
                  </div>
                );
              })}
            </div>
          </FullPage>
        </Element>
        <ScrollDown destination="about"></ScrollDown>
      </div>
    );
  }
}

export default FirstPage;
