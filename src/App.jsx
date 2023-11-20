// App.jsx
import React from 'react';
import Logo from './components/Logo';
import Typewriter from './components/Typewriter';
import Description from './components/Description';
import Contactform from './components/Contactform';
import './index.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gradient-to-b from-black to-blue-800'>
      <header>
        <Logo />
      </header>
      <main className='mt-40 text-center flex flex-col items-center'>
        <Typewriter text="Seamless, secure, and futuristic" />
        <Description />
        <Contactform />
      </main>
    </div>
  );
}

export default App;
