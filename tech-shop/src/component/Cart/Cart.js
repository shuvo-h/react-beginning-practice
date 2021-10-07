import React, { useState } from 'react';

const Cart = (props) => {
    const {cartProduct} = props;
    
    
    return (
        <div>
            <h3>Total Select: {cartProduct.length}</h3>
            {/* <p>j: {existProducts[itemId]}</p> */}
        </div>
    );
};

export default Cart;