import Contactform from './components/Contactform';
import Description from './components/Description';
import Logo from './components/Logo';
import Typewriter from './components/Typewriter';
import './index.css';

function App() {

  return (
    <main className='grid place-items-center h-full bg-gradient-to-b from-blue-950 to-blue-900'>
      <Logo className=''/>
      <Typewriter text="Seamless, secure, and futuristic"/>
      <Description/>
      <Contactform/>
    </main>
  );
}

export default App;
