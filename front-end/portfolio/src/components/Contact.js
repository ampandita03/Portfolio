import React from "react";
import "../styles/Contact.css";

const Contact = () => {

    const mail = require('../assets/images/mail.png');
    const call = require('../assets/images/Call.png');
    const git = require('../assets/images/github.png');
    const linkedIn = require('../assets/images/linkedIn.png');
    const pdf = require('../assets/pdf/resume.pdf');

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
    <div className="contactSection">
      <h1>CONTACT</h1>
      <div className="contactCard">
        <h3>Contact Information</h3>
        <p>Feel free to reach out to me at:</p>
        <div className="mailSection">
            <img src={mail} alt="mail" onClick={emailHandler}/>
            <h5>alokpandita3@gmail.com</h5>
        </div>

        <div className="phoneSection">
            <img src={call} alt="call" onClick={phoneHandler}/>
            <h5 onClick={phoneHandler}>6006083428</h5>
        </div>

        <h4>Connect with me:</h4>
        <div className="socials">
            <img src={git} alt='gitHub' onClick={gitHubNav}/>
            <img src={linkedIn} alt='linkedIn' onClick={linkedInNav}/>

        </div>

<a href={pdf}
    download="resume.pdf"
    style={{ textDecoration: "none", color: "inherit" }}>
        <div className="resumeCard">
            <h6>Download Resume</h6>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
