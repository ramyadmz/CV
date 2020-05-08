import React, { Component } from "react";
import FullPage from "../components/FullPage";
import { Element } from "react-scroll";
import "./Skills.css";
import data from "../data.json";

class Skills extends Component {
  render() {
    return (
      <Element id="Skills" name="Skills">
        <FullPage>
          <div className="skill-list">
            {data.SkillsPage.items.map((skill) => {
              return (
                <div className="card">
                  <h4 className="skill-title palete2">{skill.title}</h4>
                  <img
                    className="skill-icon"
                    src={`https://icongr.am/devicon/${skill.image}-original.svg?size=64`}
                    alt="skill.title"
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

export default Skills;
