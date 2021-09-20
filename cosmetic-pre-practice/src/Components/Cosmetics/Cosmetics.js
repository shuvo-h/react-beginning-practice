import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res=>res.json())
            .then(data=>setCosmetics(data))
    },[])
    return (
        <div>
            <h2>Cosmetic Store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic id={cosmetic.key} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;