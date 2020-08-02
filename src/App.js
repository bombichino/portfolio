import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import AltNavbar from "../src/components/Navbar/AltNavbar";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import LandingPage from "./Pages/LandingPage";
import PorftolioPage from "./Pages/PortfolioPage";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import PortfolioPage from "./Pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      {/* <AltNavbar /> */}
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/LandingPage" component={LandingPage} />
          <Route exact path="/PortfolioPage" component={PortfolioPage} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </div>
  );
}

export default App;
