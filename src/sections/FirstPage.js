import React, { Component } from "react";
import FullPage from "../components/FullPage";
import { Element } from "react-scroll";
import { SocialMediaIconsReact } from "social-media-icons-react";
import "./FirstPage.css";
import "./theme.css";
import data from "../data.json";

class FirstPage extends Component {
  render() {
    return (
      <Element id="home" name="home">
        <FullPage>
          <h1 className="palete2 heading">{data.FirstPage.items.title}</h1>
          <div>
            <h3 className="palete3 heading">{data.FirstPage.items.subtitle}</h3>
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
    );
  }
}

export default FirstPage;
