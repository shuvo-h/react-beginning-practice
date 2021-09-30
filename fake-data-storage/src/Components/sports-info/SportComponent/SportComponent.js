import React from 'react';
import { deSelectPlayer, selectPlayer } from '../sportUtilities/sportUnilities';

const SportComponent = (props) => {
    const {country, email, name, region, track2} = props.sportInfo;
    const selectHandler = id => selectPlayer(id);
    const deSelectHandler = id => deSelectPlayer(id);
    return (
        <div style={{border:"1px solid", margin:"15px", backgroundColor:"tomato", color:"white"}}>
            <h2>{name} <small>({country})</small></h2>
            <p>Area: {region}</p>
            <p>Email: {email}</p>
            <button onClick={()=>selectHandler(track2)}>Select</button>
            <button onClick={()=>deSelectHandler(track2)}>Deselect</button>
        </div>
    );
};

export default SportComponent;