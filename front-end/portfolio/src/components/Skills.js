import React from "react";
import "../styles/Skills.css";
const Skills = () => {

  const resumeHandler=()=>{
    window.location.href="/resume";
  }
  return (
    <div className="skillsSection">
      <h3>MY SKILLS</h3>
        {/*Skill*/ }
      <div className="skillsCard">
       
        <div className="barDiv">
        <h6>React</h6>
        <p>85%</p>
          <div className="progressBar">
            <div className="progressPercentage"></div>
          </div>
        </div>

        <div className="barDiv1">
        <h6>React-Native</h6>
        <p>90%</p>
          <div className="progressBar">
            <div className="progressPercentage"></div>
          </div>
        </div>

        <div className="barDiv2">
        <h6>PHP</h6>
        <p>75%</p>
          <div className="progressBar">
            <div className="progressPercentage"></div>
          </div>
        </div>

        <div className="barDiv3">
        <h6>MongoDB</h6>
        <p>82%</p>
          <div className="progressBar">
            <div className="progressPercentage"></div>
          </div>
        </div>

        <div className="barDiv4">
        <h6>Figma</h6>
        <p>95%</p>
          <div className="progressBar">
            <div className="progressPercentage"></div>
          </div>
        </div>
      </div>


      <div className="techSkills">
        <h4>More of Technical Skills</h4>
        <ul>
          <li>
            React
          </li>

          <li>
            React-Native
          </li>

          <li>
            MySQL
          </li>

          <li>
            MongoDB
          </li>

          <li>
            Postman
          </li>

          <li>
            REST Api
          </li>

          <li>
            JavaScript
          </li>

          <li>
            PHP
          </li>

          <li>
            NodeJS
          </li>

          <li>
            ExpressJS
          </li>
        </ul>
      </div>
      <p><a onClick={resumeHandler}>See Resume</a></p>
    </div>
  );
};

export default Skills;
