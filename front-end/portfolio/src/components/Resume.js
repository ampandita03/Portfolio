import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  const mail = require("../assets/images/mail.png");
  const call = require("../assets/images/Call.png");
  const git = require("../assets/images/github.png");
  const linkedIn = require("../assets/images/linkedIn.png");
  const resume = require("../assets/images/AlokPanditResume.png");
  const file = require("../assets/images/file.png");
  const pdf = require("../assets/pdf/resume.pdf");

  const emailHandler=()=>{
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=alokpandita3@gmail.com" , "_blank");
  }

  const phoneHandler=()=>{
    window.location.href="tel:6006083428";
  }
  const gitHubNav = () => {
    window.open("https://github.com/ampandita03", "_blank");
  };
  
  const linkedInNav=()=>{
    window.open("https://www.linkedin.com/in/alokpandit03/", "_blank")
  }
  return (
    <div className="resumeSection">
      <div className="contactDiv">
        <h1>HIRE ME!</h1>
        <h3>CONTACT</h3>
        <div className="mailDiv">
          <img src={mail} alt="mail" onClick={emailHandler} />
          <p>alokpandita3@gmail.com</p>
        </div>

        <div className="callDiv">
          <img src={call} alt="call"  onClick={phoneHandler}/>
          <p>6006083428</p>
        </div>

        <div className="externalDiv">
          <h3>EXTERNAL</h3>
          <div className="git" onClick={gitHubNav}>
            <img src={git} alt="git" />
          </div>
          <div className="linkedIn" onClick={linkedInNav}>
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </div>

      <div className="resumeCard">
        <img src={resume} alt="resume" />
      </div>

        <a
          href={pdf}
          download="resume.pdf"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="download">
            <img src={file} alt="Download" />
            <p>Download PDF</p>
          </div>
        </a>
      </div>
  );
};

export default Resume;
