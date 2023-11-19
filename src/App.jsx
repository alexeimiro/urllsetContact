import Contactform from './components/Contactform';
import Description from './components/Description';
import Logo from './components/Logo';
import Typewriter from './components/Typewriter';
import './index.css';

function App() {

  return (
    <main className='grid place-items-center h-screen app transition-all ease-in  bg-gradient-to-b from-blue-950 to-blue-800'>
      <Logo/>
      <Typewriter text="Crowdfunding platform for collective investment in commercial and residential real estate."/>
      <Contactform/>
    </main>
  );
}

export default App;
