import logo from './logo.svg';
import './App.css';

// -------------------------
import Hello from './components/Hello';
// import CountryName from './components/CountryName';
// import DistrictName from './components/DistrictName';
// import ButtonAdd from './components/ButtonAdd';
// import ButtonClass from "./components/ButtonClass"
// import ButtonParameter from './components/ButtonParameter';
// import Welcome from './components/WelcomeState';
// import NestedArrayObject from './components/NestedArrayObject';
// import StateClass from './components/StateClass';
// import ChangeName from './components/ChangeState';
// import LoginCondition from './components/Condition';
// import TernaryCondition from './components/TernaryCondition';
// import RefreshPage from './components/ForceUpdate';
// import RenderCustomDom from './components/ReactDOM';
// import ReactDomRender from './ReactDOM2';
// import ReactForm from './components/InputForm';
// import FormWithState from './components/FormWithState';
// import Countries from './components/Country/Countries';
import NameChange from './EventHandler/NameChange';
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
    {/* <Welcome></Welcome> */}
    {/* <StateClass></StateClass> */}
    {/* <NestedArrayObject></NestedArrayObject> */}
    
    {/* <ChangeName></ChangeName> */}
    {/* <LoginCondition></LoginCondition> */}
    {/* <TernaryCondition></TernaryCondition> */}
    {/* <RefreshPage></RefreshPage> */}
    {/* <RenderCustomDom></RenderCustomDom> */}
    {/* <ReactDomRender></ReactDomRender> */}
    {/* <ReactForm></ReactForm> */}
    {/* <FormWithState></FormWithState> */}
    {/* <Countries></Countries> */}
    <NameChange></NameChange>
    </div>
    
  );
}

export default App;
