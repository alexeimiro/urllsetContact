// Logo.jsx
import React, { useState, useEffect } from 'react';
import urllsetImage from '../images/urllset.svg';

const Logo = () => {
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const handleScroll = () => {
      const newScale = window.scrollY > 50 ? 0.4 : 0.8;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoContainerStyles = 'fixed top-0 left-0 right-0 z-30 bg-black flex justify-center items-center';
  const logoImageStyles = 'object-contain';

  return (
    <div className={logoContainerStyles}>
      <img src={urllsetImage} alt="Urllset Logo" className={logoImageStyles} style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease-in-out' }} />
    </div>
  );
};

export default Logo;
