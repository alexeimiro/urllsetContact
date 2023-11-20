// Logo.jsx
import React from 'react';
import urllsetImage from '../images/urllset.svg'; // Adjust the path accordingly

const Logo = ({size}) => {
  return (
    <div className='p-10'>
      <img src={urllsetImage} 
      alt="Urllset Logo"/>
    </div>
  );
};

export default Logo;
