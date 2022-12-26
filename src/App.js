import FourthPart from './components/FourthPart';
import Main from './components/Main';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThirdPart';
import listOfName from './components/store.js';

function App() {
  return (
    <>
      <Main />
      <SecondPart listOfName={listOfName}/>
      <ThirdPart listOfName={listOfName}/>
      <FourthPart listOfName={listOfName}/>
    </>
  );
}

export default App;
