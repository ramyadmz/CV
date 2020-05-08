import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavigationBar.css";
import data from "../data.json";

class NavigationBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navlist">
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                <a href="">home</a>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                <a href="">about</a>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Skills" spy={true} smooth={true}>
                <a href="">Skills</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="themebox">
          <img
            onClick={() => {
              this.props.changeTheme();
            }}
            className="themeicon"
            src={data.icons.general.theme}
            alt="change theme"
          />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
