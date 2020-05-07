import React, { Component } from "react";
import FullPage from "../components/FullPage";
//import NavigationBar from "../components/NavigationBar";
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
//    let next
//    switch(this.state.theme) {    
//        case "theme1" : next = "theme2"
//        case "theme2" : next = "theme3"
//        case "theme3" : next = "theme1"
//      case "theme1" :  return () => { this.setState({ theme : "theme2"  }) ;}
//      case "theme2" :  return () => {this.setState({ theme : "theme3"  }) ;}
//      case "theme3" :  return () => {this.setState({ theme : "theme1"  }) ;}
    
 //   this.setState({ theme : next })
  }

  render() {
    return (
      <FullPage className={this.state.theme}>
        <div className="nav">
          <div className="navlist">
            <ul>
              <li>
                <a href="news.asp">About</a>
              </li>
              <li>
                <a href="contact.asp">Experience</a>
              </li>
              <li>
                <a href="about.asp">Skills</a>
              </li>
            </ul>
          </div>
          <div className="themebox">
            <img
              onClick={() => {
                this.changeTheme();
              }}
              className="themeicon"
              src="/icons/theme.png"
              alt="change theme"
            />
          </div>
        </div>
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
