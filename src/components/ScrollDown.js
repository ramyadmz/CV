import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ScrollDown.css";

class ScrollDown extends Component {
  render() {
    return (
      <Link
        activeClass="active"
        to={this.props.destination}
        spy={true}
        smooth={true}
      >
        <div class="mouse_scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
          </div>
        </div>
      </Link>
    );
  }
}

export default ScrollDown;
