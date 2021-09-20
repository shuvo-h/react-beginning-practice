import logo from './logo.svg';
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import TimeRightNow from './Components/TimeLearn/TimeRightNow';

function App() {
  return (
    <div className="App">
      <TimeRightNow></TimeRightNow>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
