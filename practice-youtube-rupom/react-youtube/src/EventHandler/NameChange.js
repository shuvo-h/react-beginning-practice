import React from 'react';
import EventFunction from './EventFunction/EventFunction';

const NameChange = () => {
    return (
        <div>
            <i><h2>Change the name by button</h2></i>
            <p>Name: </p>
            <button onClick={()=> EventFunction("display div")}>Change</button>
        </div>
    );
};

export default NameChange;