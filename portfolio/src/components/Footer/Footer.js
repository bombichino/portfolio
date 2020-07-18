import React from "react";
import ReactDOM from "react-dom";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <div className="navbar" color="dark" dark>
          <div className="container">
            <div className="navbarBrand" id="text">
              donutbear designs
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
