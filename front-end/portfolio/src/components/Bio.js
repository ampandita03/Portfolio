import React from "react";
import '../styles/Bio.css';
const Bio=()=>{
    const me = require('../assets/images/me.jpg');
    return(
        <div className="bioSection">
            <img src={me} alt="Alok"/>
            <h1>BIO</h1>
            
            <div className="about">
                <h3>About Me</h3>
                <p>I am Alok Pandit, currently pursuing a Bachelor of Technology (B.Tech) in Computer Science from Deenbandhu Chhotu Ram University of Science and Technology (DCRUST) in Murthal, Sonipat, Haryana. I have a strong passion for software development and enjoy exploring the vast field of technology, particularly in areas like React ,      React-Native, MERN. My academic journey has equipped me with a solid foundation in computer science principles, while my hands-on projects have honed my skills in building functional, user-friendly applications. I'm always eager to learn new technologies and apply them to solve real-world problems.</p>
            </div>

            <div className="educationDiv">
                <h4>Education</h4>
                <div className="ug">
                <h3>B.Tech in CSE [2022-2026]</h3>
                <p>Deenbandhu Chhotu Ram University of Science and Technology,Haryana</p>
                </div>

                <div className="x">
                <h2>X Class [2019-2020]</h2>
                <p>Coventry Scholars Senior Secondary School , Jammu</p>
                </div>

                <div className="xii">
                <h2>XII Class [2021-2022]</h2>
                <p>Govt. Mixed School , Jammu</p>
                </div>

            </div>  
        
        </div>
    )
}

export default Bio;