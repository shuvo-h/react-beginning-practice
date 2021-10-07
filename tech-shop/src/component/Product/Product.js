import React from 'react';
import './product.css'

const Product = (props) => {
    const {product} = props;
    const {itemImg, itemName, itemPrice, itemStr, itemId} = product;
    return (
        <div className="product-container">
            <h2>{itemName} (${itemPrice})</h2>
            <img src={itemImg} alt="" />
            <button>See Details</button>
            <button onClick={()=>{props.handleAddCart(itemId)}}>add to cart</button>
        </div>
    );
};

export default Product;