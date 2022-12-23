import './App.css';
import FourthPart from './components/FourthPart';
import Main from './components/Main';
import Navbar from './components/Navbar.js';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThirdPart';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <SecondPart/>
      <ThirdPart/>
      <FourthPart/>
    </>
  );
}

export default App;
