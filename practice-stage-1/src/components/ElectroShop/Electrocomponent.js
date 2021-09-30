import './electro-component.css';

import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import Electrocart from './ElectroCart/Electrocart';

const Electrocomponent = () => {
    const[products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    const handleOrder = (product) =>{
        setCart(product);
    }
    return (
        <div className='product-store'>
            <div>
            <h1>product list</h1>
            {
                products.map(product => <SingleProduct key={product.id} product={product} handleOrder={handleOrder}></SingleProduct>)
            }
            </div>
            <div>
                <Electrocart cart={cart}></Electrocart>
            </div>
        </div>
    );
};

export default Electrocomponent;