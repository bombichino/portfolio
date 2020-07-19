import React from "react";
import ReactDOM from "react-dom";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbo-contact">
          <div className="email-div">
            <p>Let's chat:</p>
            <br />
            <a href="mailto:nick.bombicino@gmail.com">
              nick.bombicino@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
