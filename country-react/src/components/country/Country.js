import React, { useEffect, useState } from "react";
import "../country/country.css"

const CountryAPI = () => {
    const [allCountry,setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(data=>setCountry(data))
    },[])
    return(
        <div className='parentContainer'>
            {
                allCountry.map(singleCountry => <SingleCountryComponent countryData={singleCountry}></SingleCountryComponent>)
            }
        </div>
    )
}

const SingleCountryComponent = (props) => {
    console.log(props);
    const {alpha2Code, currencies, flag, languages, name, nativeName, population} = props.countryData;
    const imgStyle = {height:"50px", width:"80px"}
    return(
        <div className="country">
            <h1>{name}</h1>
            <div style={imgStyle}>
                <img style={{width:"100%"}} src={flag} alt="" />
            </div>
            <ul>
                <li>{alpha2Code}</li>
                <li>{currencies[0].name}</li>
            </ul>
        </div>
    )
}

export default CountryAPI;
