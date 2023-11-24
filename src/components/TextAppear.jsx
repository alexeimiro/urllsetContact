import React, { useState, useEffect } from 'react';

const TextAppear = ({ text }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let currentOpacity = 0;
    const intervalId = setInterval(() => {
      if (currentOpacity <= 1) {
        setOpacity(currentOpacity); // Gradually increase opacity
        currentOpacity += 0.01; // Adjust the speed of appearance here
      } else {
        clearInterval(intervalId);
      }
    }, 7); // Adjust the speed here (in milliseconds)

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className='text-5xl font-sans overflow-hidden  mb-20 mx-8'>
      <p style={{ opacity }} className='font-bold text-white  bg-clip-text text-transparent'>
        {text}
      </p>
    </div>
  );
};

export default TextAppear;
