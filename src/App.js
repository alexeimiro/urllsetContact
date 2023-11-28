import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Logo from './components/Logo';
import WelcomeText from './components/WelcomeText';
import Description from './components/Description';
import Contactform from './components/Contactform';
import Footer from './components/Footer';

function App() {
  return (
    <div className='text-center'>
      <header>
        <Logo />
      </header>
      <main className="mt-40 flex flex-col items-center max-w-5xl mx-auto">
        <WelcomeText />
        <Link className='bg-blue-500 hover:bg-blue-700 text-white w-35 py-2 px-4 rounded shadow mt-4' to="/Get-in-touch">
          Get In Touch
        </Link>
        <Description />
        <Contactform />
      </main>
      <Footer />
    </div>
  );
}

export default App;
