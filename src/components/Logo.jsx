// Logo.jsx
import React, { useState, useEffect } from 'react';
import urllsetImage from '../images/urllset.svg';
import { Link } from "react-router-dom";

const Logo = () => {
  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    const handleScroll = () => {
      const newScale = window.scrollY > 50 ? 0.4 : 0.6;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const minHeight = 60; // Adjust the minimum height as needed

  const logoContainerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 30,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: scale < 0.8 ? 'center' : 'flex-start', // Adjust alignment based on the scale
    height: `${Math.max(scale * 140, minHeight)}px`, // Set minimum height
    width: '100%', // Adjust the width as needed
    transition: 'height 0.3s ease-in-out', // Add transition for smooth height change
  };

  const logoImageStyles = {
    objectFit: 'contain',
    transform: `scale(${scale})`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <Link to="/">
    <div style={logoContainerStyles}>
      <img src={urllsetImage} alt="Urllset Logo" style={logoImageStyles} className='' />
    </div>
    </Link>
  );
};

export default Logo;
