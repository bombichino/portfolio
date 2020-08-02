import React from "react";
import ReactDOM from "react-dom";
import "./Project.css";
import CodeQuiz from "../../Pages/Portfolio-Assets/Code-Quiz.png";
import DayPlanner from "../../Pages/Portfolio-Assets/Day-Planner.png";
import MurderSquad from "../../Pages/Portfolio-Assets/Murder-Squad.png";
import Password from "../../Pages/Portfolio-Assets/password-generator.png";
import StanBase from "../../Pages/Portfolio-Assets/StanBase.png";
import Weather from "../../Pages/Portfolio-Assets/Weather-Dashboard.png";

// create loop and one element that is re-rendered multiple times

class Project extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            className="project-preview"
            src={MurderSquad}
            alt="Murder Squad"
          />
          <div class="centered">
            <h4>Murder Squad</h4>
            <a href="https://future-group-project2.herokuapp.com/">
              Deployed App
            </a>
            <br />
            <a href="https://github.com/SM91wilson/project2">GitHub Repo</a>
          </div>
        </div>
        <hr />
        <div>
          <img className="project-preview" src={StanBase} alt="StanBase" />
          <div class="centered">
            <h4>StanBase</h4>
            <a href="https://bombichino.github.io/project-01/">Deployed App</a>
            <br />
            <a href="https://github.com/bombichino/project-01">GitHub Repo</a>
          </div>
        </div>
        <hr />
        <div>
          <img
            className="project-preview"
            src={Password}
            alt="Password Generator"
          />
          <div class="centered">
            <h4>Password Generator</h4>
            <a href="https://bombichino.github.io/password-generator/">
              Deployed App
            </a>
            <br />
            <a href="https://github.com/bombichino/password-generator">
              GitHub Repo
            </a>
          </div>
        </div>
        <hr />
        <div>
          <img className="project-preview" src={DayPlanner} alt="Day Planner" />
          <div class="centered">
            <h4>Day Planner</h4>
            <a href="https://bombichino.github.io/day-planner/">Deployed App</a>
            <br />
            <a href="https://github.com/bombichino/day-planner">GitHub Repo</a>
          </div>
        </div>
        <hr />
        <div>
          <img
            className="project-preview"
            src={Weather}
            alt="Weather Dashboard"
          />
          <div class="centered">
            <h4>Weather Dashboard</h4>
            <a href="https://bombichino.github.io/weather-app/">Deployed App</a>
            <br />
            <a href="https://github.com/bombichino/weather-app">GitHub Repo</a>
          </div>
        </div>
        <hr />
        <div>
          <img className="project-preview" src={CodeQuiz} alt="Code Quiz" />
          <div class="centered">
            <h4>Code Quiz</h4>
            <a href="https://bombichino.github.io/code-quiz/">Deployed App</a>
            <br />
            <a href="https://github.com/bombichino/code-quiz">GitHub Repo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
