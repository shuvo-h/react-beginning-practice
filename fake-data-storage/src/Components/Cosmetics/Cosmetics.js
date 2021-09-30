import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch('/cosmeticData.json')
        .then(res=>res.json())
        .then(data=>setUser(data))
            
    },[])
    return (
        <div>
            {
                users.map(user => <Cosmetic key={user._id} user={user}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;