import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setCurrentText(text.slice(0, index + 1)); // Reveal characters from left to right
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 15); // Adjust the speed here (in milliseconds)

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className='text-3xl font-sans overflow-hidden p-70 mt- mb-16 '>
      <p className='font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>{currentText}</p>
    </div>
  );
};

export default Typewriter;
