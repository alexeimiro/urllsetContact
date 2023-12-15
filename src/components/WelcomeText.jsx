import React, { useState, useEffect } from 'react';
import AnimatedGradientText from  "./AnimatedGradientText"

const TextAppear = ({ text }) => {
  const [opacity, setOpacity] = useState(0);
  const [welcomeOpacity, setWelcomeOpacity] = useState(0);

  useEffect(() => {
    // Fading in the main text
    let currentOpacity = 0;
    const intervalId = setInterval(() => {
      if (currentOpacity <= 1) {
        setOpacity(currentOpacity);
        currentOpacity += 0.01;
      } else {
        clearInterval(intervalId);
      }
    }, 7);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    // Fading in the welcome text after the main text
    let currentOpacity = 0;
    const welcomeIntervalId = setInterval(() => {
      if (currentOpacity <= 1) {
        setWelcomeOpacity(currentOpacity);
        currentOpacity += 0.01;
      } else {
        clearInterval(welcomeIntervalId);
      }
    }, 7);

    return () => clearInterval(welcomeIntervalId);
  }, [text]);

  return (
    <div className='text-xl font-sans overflow-hidden  mb-5 mx-8 '>
      <p style={{ opacity }} className='font-bold text-white  bg-clip-text text-transparent'>
      <AnimatedGradientText> Your Gateway to Empowered Real Estate Investment! </AnimatedGradientText>

      </p>
      <p style={{ opacity: welcomeOpacity }} className=' text-xl text-white mt-5'>
        Welcome to Urllset: Crowdfunding Real Estate Investment Made Easy
      </p>
    </div>
  );
};

export default TextAppear;