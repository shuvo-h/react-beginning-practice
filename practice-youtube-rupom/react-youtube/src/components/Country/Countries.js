import React, { useEffect, useState } from "react";

import '../Country/Country.css'

const Countries = () =>{
    const [countries,setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(data=>setCountry(data))
    },[])
    const CountryComponent = (props) => {
        return(
            <div className="country">
                <div>
                    <img src={props.image} alt="" />
                </div>
                <h3>{props.name} ({props.capital})</h3>
                <p>Language {props.lan}</p>
            </div>
        )
    }

    return(
        <div className="container">
            {
                countries.map(country => <CountryComponent name={country.name} lan={country.languages[0].name} capital={country.capital} image={country.flag}></CountryComponent>)
            }
        </div>
    )
}
export default Countries;