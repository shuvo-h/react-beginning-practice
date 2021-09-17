import React from "react";

const CountryName = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.origin}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur ipsum atque laudantium provident corporis laboriosam cum quam officiis harum?</p>
        </div>
    )
}

export default CountryName;