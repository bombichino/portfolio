import React from "react";
import ReactDOM from "react-dom";
import Project from "../components/Project/Project";
import Resume from "../components/Resume/Resume";
import NickPic from "../../src/Nick.JPG";
import "./PortfolioPage.css";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          {/* <div className="main-name">
            <div>
              <h1>Portfolio</h1>
            </div>
          </div> */}
          <div className="projects-div">
            <Project />
            <Resume />
            <img className="portfolio-bio" src={NickPic} alt="Nick Bombicino" />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
