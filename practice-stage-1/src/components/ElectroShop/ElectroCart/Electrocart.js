import "./Electrocart.css"
import React from 'react';

const Electrocart = (props) => {
    const {cart} = props;

    console.log(cart);
    const totalQuantity = 0;
    const total = 0;
    if (!cart.quantity) {
        cart.quantity = 1;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Total order: </p>
            <p>Total Price:</p>
            <p>Delivery Cost:</p>
            <p>Tax: </p>
            <p>Grand Total: </p>
        </div>
    );
};

export default Electrocart;