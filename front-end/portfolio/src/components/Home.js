import React from "react";
import "../styles/Home.css";
const Home = () => {
  const profileImage = require("../assets/images/Alok.jpg");
  const bookImage = require("../assets/images/qualification.png");
  const rightArrow = require("../assets/images/rightArrow.png");
  const resume = require("../assets/images/resume.png");
  const skills = require("../assets/images/Skills.png");
  const contact = require("../assets/images/contact.png");
  const gitHub = require("../assets/images/github.png");
  const linkedIn = require("../assets/images/linkedIn.png");

  const qualificationNav=()=>{
    window.location.href="/bio";
  }

  const resumeNav=()=>{
    window.location.href="/resume";
  }

  const skillsNav=()=>{
    window.location.href="/skills";
  }

  const contactNav=()=>{
    window.location.href="/contact"
  }


  const gitHubNav = () => {
    window.open("https://github.com/ampandita03", "_blank");
  };
  
  const linkedInNav=()=>{
    window.open("https://www.linkedin.com/in/alokpandit03/","_blank")
  }
  return (
    <div className="home">
      {/*INFO CARD */}
      <div className="infoCard">
        <img src={profileImage} alt="img" />
        <h3>UI-UX Designer | Web Developer | App Developer</h3>
        <h1>Alok Pandit</h1>
        <h2>
          Currently pursuing B. Tech. from Deenbandhu Chhotu
          Ram University of Science and Technology
        </h2>
        <h4>📍 Sonipat , Haryana</h4>
        <div className="aboutMe">
          <h2>About Me</h2>
          <p>
            I am a passionate and innovative Computer Science student with a
            strong drive to create impactful projects and leverage cutting-edge
            technologies. With a keen interest in exploring new tech trends and
            solving complex problems, I am dedicated to continuous learning and
            growth in the dynamic field of software development.
          </p>
        </div>
      </div>
     {/*QUalifiation CARD */}
      <div className="qualificationCard" onClick={qualificationNav}>
        <div className="imageSection">
          <img src={bookImage} alt="qualification" />
          <div className="arrowImage">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <h1>Qualifications</h1>
        <h2>SOMETHING OF ME..</h2>
      </div>
      {/*Resume CARD*/}
      <div className="resumeCard" onClick={resumeNav}>
        <div className="imageSection">
          <img src={resume} alt="qualification" />
          <div className="arrowImage">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <h1>Resume</h1>
        <h2>CV</h2>
      </div>
      {/*Skills CARD*/} 
      <div className="skillsCard" onClick={skillsNav}>
        <div className="imageSection">
          <img src={skills} alt="qualification" />
          <div className="arrowImage">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <h1>Skills</h1>
        <h2>MY EXPERTISE</h2>
      </div>
      {/*Contact CARD */}
      <div className="contactCard" onClick={contactNav}>
        <div className="imageSection">
          <img src={contact} alt="qualification" />
          <div className="arrowImage">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <h1>Contact</h1>
        <h2>CONNECT WITH ME</h2>
      </div>

      {/*Social CARD */}
      <div className="socialCard">
        <img src={gitHub} alt="github" />
        <h4>GitHub & LinkedIn</h4>
        <p>Visit my profiles</p>
        <div className="socialBox1" onClick={gitHubNav}>
          <img src={gitHub} alt="github" />
          <h6>GitHub</h6>
        </div>
        <div className="socialBox2" onClick={linkedInNav}>
          <img src={linkedIn} alt="linkedIn" />
          <h6>LinkedIn</h6>
        </div>
      </div>

       {/* Collaborate CARD */}
       <div className="collabCard" onClick={resumeNav}>
        <h1>Let's collaborate <span>together</span></h1>
        <p>See my <span>CV</span></p>
        <img src={rightArrow} alt="arrow"/>
       </div> 
       
    </div>
  );
};
export default Home;
