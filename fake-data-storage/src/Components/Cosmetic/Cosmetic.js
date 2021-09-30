import React from 'react';
import { addToDb, deleteDb } from '../../utilities/fake-database';

const Cosmetic = (props) => {
    const {name,age,balance, picture,about, _id} = props.user;
    const handlePurchase = (id) => {
        addToDb(id);
    }
    const handleRemove = id => {
        deleteDb(id);
    }
    return (
        <div style={{border:"1px solid",margin:"10px"}}>
            <h2>{name} ({age})</h2>
            <small key={_id}>{balance}</small>
            <div><img src={picture} alt="" /></div>
            <p>{about}</p>
            <p>Key: {_id}</p>
            <button onClick={()=>handlePurchase(_id)}>buy now</button>
            <button onClick={()=>handleRemove(_id)}>Remove item</button>
        </div>
    );
};

export default Cosmetic;