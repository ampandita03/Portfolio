import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Nav';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Layout = () => {
  const location = useLocation();
  const [containerHeight, setContainerHeight] = useState('100vh');

  const updateContainerHeight = () => {
    let newHeight;
    if (window.innerWidth < 768) {
      switch (location.pathname) {
        case '/':
          newHeight = '104rem';
          break;
        case '/bio':
          newHeight = '85rem';
          break;
        case '/resume':
          newHeight = '75rem';
          break;
        case '/skills':
          newHeight = '65rem';
          break;
        case '/contact':
          newHeight = '100vh';
          break;
        default:
          newHeight = '100vh';
      }
    } 
    else if(window.innerWidth>767 && window.innerWidth<1024){
      switch (location.pathname) {
        case '/':
          newHeight = '53rem';
          break;
        case '/bio':
          newHeight = '85rem';
          break;
        case '/resume':
          newHeight = '75rem';
          break;
        case '/skills':
          newHeight = '65rem';
          break;
        case '/contact':
          newHeight = '100vh';
          break;
        default:
          newHeight = '100vh';
      }
    }
    

    else if(window.innerWidth>1023 && window.innerWidth<1440){
      switch (location.pathname) {
        case '/':
          newHeight = '52rem';
          break;
        case '/bio':
          newHeight = '85rem';
          break;
        case '/resume':
          newHeight = '88rem';
          break;
        case '/skills':
          newHeight = '65rem';
          break;
        case '/contact':
          newHeight = '100vh';
          break;
        default:
          newHeight = '100vh';
      }
    }
    else {
      newHeight = '100vh';
    }
    setContainerHeight(newHeight);
  };

  useEffect(() => {
    updateContainerHeight(); 
    window.addEventListener('resize', updateContainerHeight); 

    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [location.pathname]); 

  return (
    <div className='mainContainer' style={{ height: containerHeight }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
