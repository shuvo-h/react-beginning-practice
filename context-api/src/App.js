import logo from './logo.svg';
import './App.css';
import GrandParent from './component/GrandParent/GrandParent';
import { createContext, useState } from 'react';

export const NeclessContext = createContext("defaultValue");

function App() {
  const [house,setHouse] = useState(100);
  const gift = "Dimond Necless";
  return (
    <NeclessContext.Provider value={gift}>
    <div className="App">
      <button onClick={()=>setHouse(house+1)}>home build</button>
      <GrandParent house={house}></GrandParent>
    </div>
    </NeclessContext.Provider>
  );
}

export default App;
