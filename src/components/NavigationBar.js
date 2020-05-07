import React, { Component } from "react";
import "./NavigationBar.css";
class NavigationBar extends Component {
    
    changeTheme = () => {
    
        
      if ( this.props.theme === "theme1")
           this.props.theme = "theme2"
           else
           this.props.theme = "theme3"
        
      }; 
    
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
                this.changeTheme()
            }} className='themeicon' src="/icons/theme.png" alt="change theme" />
         
        </div>
      </div>
    );
  }
}

export default NavigationBar;
