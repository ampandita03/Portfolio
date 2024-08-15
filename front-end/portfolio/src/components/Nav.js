import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css'

const NavBar = () => {
  const hamburger = require('../assets/images/hamburger.png');
  const close = require('../assets/images/close.png');
  const [menuOpen, setOpenMenu] = useState(false);

  const menuClick = () => {
    setOpenMenu(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
     
      document.body.classList.add('no-scroll');
    } else {
     
      document.body.classList.remove('no-scroll');
    }
    return () => {
     
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <div className="NavBar">
      {
        menuOpen ? 
        <img src={close} alt="close" onClick={menuClick}/> : 
        <img src={hamburger} alt="hamburger" onClick={menuClick}/>
      }
     
      <ul className={menuOpen ? "show" : ""}>
        <li>
          <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/bio" onClick={() => setOpenMenu(false)}>Bio</Link>
        </li>
        <li>
          <Link to="/resume" onClick={() => setOpenMenu(false)}>Resume</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setOpenMenu(false)}>Skills</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
