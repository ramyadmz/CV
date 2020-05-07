import React, { Component } from "react";
import "./NavigationBar.css";
import data from "../data.json";
class NavigationBar extends Component {
    
  render() {
    return (
      <div className="nav">
        
        <div className='navlist'> 
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
        <div className='themebox'>

            <img onClick={()=>{
                this.props.changeTheme()
            }} className='themeicon' src={data.icons.general.theme} alt="change theme" />
         
        </div>
      </div>
    );
  }
}

export default NavigationBar;
