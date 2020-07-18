import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div classname="navbar">
        <ul id="nav">
          <li>
            <a href="/LandingPage">Home</a>
          </li>
          <li>
            <a href="/PortfolioPage">Portfolio</a>
          </li>
          <li>
            <a href="/AboutMe">Nick</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        {/* <ul id="nav">
          <li>
            <a href="#">Home Base</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul> */}
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div>[Page content here]</div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

export default Navbar;
