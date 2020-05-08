import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ScrollToTop.css";

class ScrollToTop extends Component {
  render() {
    return (
      <Link activeClass="active" to="home" spy={true} smooth={true}>
        <div class="mouse_scroll">
          <div>
            <span class="m_scroll_arrows_top unu"></span>
            <span class="m_scroll_arrows_top doi"></span>
            <span class="m_scroll_arrows_top trei"></span>
          </div>
          <div class="mouse">
            <div class="wheel"></div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ScrollToTop;
