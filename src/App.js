import React, { Component } from "react";
import FirstPage from "./sections/FirstPage";
import About from "./sections/About";
import Skills from "./sections/Skills";

import NavigationBar from "./components/NavigationBar";

import "./App.css";
import "./components/NavigationBar.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: `themeI`,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme() {
    this.setState({
      theme:
        this.state.theme === `themeIII` ? `themeI` : this.state.theme + `I`,
    });
  }
  render() {
    return (
      <div className={this.state.theme}>
        <NavigationBar
          changeTheme={this.changeTheme.bind(this)}
        ></NavigationBar>
        <FirstPage />
        <About />
        <Skills/>

      </div>
    );
  }
}

export default App;
