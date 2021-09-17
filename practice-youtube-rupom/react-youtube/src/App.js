import logo from './logo.svg';
import './App.css';

// -------------------------
import Hello from './components/Hello';
// import CountryName from './components/CountryName';
// import DistrictName from './components/DistrictName';
// import ButtonAdd from './components/ButtonAdd';
// import ButtonClass from "./components/ButtonClass"
// import ButtonParameter from './components/ButtonParameter';
import Welcome from './components/WelcomeState';
import NestedArrayObject from './components/NestedArrayObject';
// ----------------------------

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      {/* <DistrictName name="Narail" division="Khulna"></DistrictName> */}
      {/* <DistrictName name="kurigram" division="Rajshahi"></DistrictName> */}
      {/* <DistrictName name="putia" division="Chattogram"></DistrictName> */}
      {/* <CountryName name="India"  origin="South Asia"></CountryName> */}
      {/* <CountryName name="Canada"  origin="South America"></CountryName> */}
      {/* <CountryName name="Germany"  origin="West Europe"></CountryName> */}
      {/* <ButtonAdd></ButtonAdd> */}
      {/* <ButtonClass></ButtonClass> */}
    {/* <ButtonParameter itemName="Mobile"></ButtonParameter> */}
    {/* <ButtonParameter itemName="TV"></ButtonParameter> */}
    <Welcome></Welcome>
    <NestedArrayObject></NestedArrayObject>
    </div>
    
  );
}

export default App;
