import React, { useEffect, useState } from 'react';
import {addToDb,deleteFromDb} from '../../Utilities/AddRemove'

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const {name, key, img, price, seller, stock,url} = props.cosmetic;

    const handlePurchase = (key) => {
        addToDb(key)
        
    }
    const handleRemove = (key) => {
        deleteFromDb(key);
    }
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button onClick={() => handlePurchase(key)}>Purchase</button>
            <button onClick={() => handleRemove(key)}>Remove</button>

        </div>
    );
};

export default Cosmetic;