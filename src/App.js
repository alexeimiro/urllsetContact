import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
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
        <ScrollLink
          className='bg-blue-500 hover:bg-blue-700 text-white w-35 p-3 rounded shadow mt-4 duration-500 ease-in-out'
          to="contactFormSection"
          smooth={true}
          duration={500}
        >
          Get in touch
        </ScrollLink>
        <Description />
        <Element name="contactFormSection"> 
          <Contactform />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
