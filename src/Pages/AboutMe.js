import React from "react";
import ReactDOM from "react-dom";
import "./AboutMe.css";
import Lego from "../lego.jpg";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbo-about">
          <img
            src={Lego}
            className="lego-pic"
            alt="Nick with a LEGO Pac-Man Hat"
          />
          <div className="about-div">
            <div>
              <p className="about-me">
                Hi! I'm used to writing bios in the third person, a la
                theatrical playbill, but here goes:
                <br />
                <br />
                I'm a budding developer, actor, and musicion based in Brooklyn,
                NY. Aside from my life as a performer and writer, I've spent my
                time designing websites through other platforms and learning
                foreign languages, so I decided it was time to learn another one
                and start designing from scratch. Also - I grew up in the wilds
                of Vermont, surrounded by trees and cows, and yes, I can subside
                on a diet of Maple Syrup alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
