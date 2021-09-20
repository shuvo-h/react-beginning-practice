import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import CountryAPI from './components/country/Country';

function App() {
  return (
    <div className="App">
      <CountryAPI></CountryAPI>
      <hr />
      <LoadCountry></LoadCountry>
    </div>
  );
}

const LoadCountry = () =>{
  const [countries, setCountry] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>setCountry(data))
  },[]);

  return(
    <div>
      <h2>Country List</h2>
      {
        countries.map(country=> <CountryComponent name={country.name} capital={country.capital}></CountryComponent>)
      }
    </div>
  )
}

const CountryComponent = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
}

export default App;
