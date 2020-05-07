import React, { Component } from "react";
import FullPage from "../components/FullPage";
import NavigationBar from "../components/NavigationBar";
import data from "../data.json";
import { SocialMediaIconsReact } from "social-media-icons-react";
import "./FirstPage.css";
import "../components/NavigationBar.css";

class FirstPage extends Component {
  constructor() {
    super();
    this.state = {
      theme : `themeI`
    }
    this.changeTheme = this.changeTheme.bind(this)
  } 
  changeTheme() {
    this.setState({

      theme : this.state.theme === `themeIII` ? `themeI` : this.state.theme + `I`

    })
  }

  render() {
    return (
      <FullPage className={this.state.theme}>
        <NavigationBar changeTheme={this.changeTheme.bind(this)}></NavigationBar>
        <h1 className="palete2 headings">{data.FirstPage.items.title}</h1>
        <div>
          <h3 className="palete3 headings">{data.FirstPage.items.subtitle}</h3>
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
    );
  }
}

export default FirstPage;
