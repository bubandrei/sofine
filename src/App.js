import './App.css';
import FourthPart from './components/FourthPart';
import Main from './components/Main';
import Navbar from './components/Navbar.js';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThirdPart';
import listOfName from './components/store.js';

// console.log(listOfName)
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      <SecondPart listOfName={listOfName}/>
      <ThirdPart listOfName={listOfName}/>
      <FourthPart listOfName={listOfName}/>
    </>
  );
}

export default App;
