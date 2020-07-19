import React from "react";
import ReactDOM from "react-dom";
import "./Resume.css";
import ResumeJPG from "../../Pages/Portfolio-Assets/nick-bombicino-resume.jpg";
import ResumePDF from "../../Pages/Portfolio-Assets/nick-bombicino-resume.pdf";

// create loop and one element that is re-rendered multiple times

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div>
          <hr />
          <img
            src={ResumeJPG}
            alt="Nick Bombicino Resume"
            width="104"
            height="142"
          />
          <div className="centered">
            <a href={ResumePDF} download="Nick-Bombicino-Resume">
              Click here to download a resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
