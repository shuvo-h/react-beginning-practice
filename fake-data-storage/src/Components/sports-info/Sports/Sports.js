import React, { useEffect, useState } from 'react';
import SportComponent from '../SportComponent/SportComponent';

const Sports = () => {
    const [sports,setSport] = useState([]);
    useEffect(()=>{
        fetch('/sportFakeDataBase.json')
        .then(res=>res.json())
        .then(data=>setSport(data))
    },[])
    return (
        <div>
            
            {
                sports.map(sport => <SportComponent sportInfo={sport} key={sport.track2}></SportComponent>)
            }
        </div>
    );
};

export default Sports;