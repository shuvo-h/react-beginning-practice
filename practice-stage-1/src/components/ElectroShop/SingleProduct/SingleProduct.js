import './SingleProduct.css';
import React from 'react';

const SingleProduct = (props) => {
    const {image, price,title} = props.product;
    // console.log(props);
    return (
        <div style={{border:"1px solid", margin:'15px',padding:'10px'}}>
            <img style={{width : '150px'}} src={image} alt="" />
            <h2>{title}</h2>
            <p>Price: <strong>{price}</strong></p>
            <button onClick={()=>props.handleOrder(props.product)}>Add to cart</button>
        </div>
    );
};

export default SingleProduct;