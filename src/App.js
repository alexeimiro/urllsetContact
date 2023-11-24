import React from 'react';
import './index.css';
import Logo from './components/Logo';
import TextAppear from './components/TextAppear';
import Description from './components/Description';
import Contactform from './components/Contactform';
import Footer from './components/Footer';

function App() {
  return (
    <div className='items-center text-center'>
      <header >
        <Logo />
      </header>
      <main className="mt-40 flex flex-col max-w-5xl mx-auto">
        <TextAppear text="Your Gateway to Empowered Real Estate Investment!" />
        <Description />
        <Contactform />
      </main>
      <Footer />
    </div>
  );
}

export default App;
