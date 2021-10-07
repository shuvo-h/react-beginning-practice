import React, { useState } from 'react';
import './allProducts.css'
import useAllProducts from '../../hooks/useAllProducts';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { saveItem } from '../../utilities/saveStorage';

const AllProducts = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const products = useAllProducts();
    // console.log(products);
    const handleAddCart = (id) =>{
        const selectedProduct = products.find(p => p.itemId === id);
        if (selectedProduct) {
            const newCart = [...cartProduct,selectedProduct];
            setCartProduct(newCart);
        }
        saveItem(id);
    }
    return (
        <div className="shop-container">
            <div className="products">
                {
                    products.map(product => <Product handleAddCart={handleAddCart} product={product} key={product.itemId}></Product>)
                }
            </div>
            <div>
                <Cart cartProduct={cartProduct}></Cart>
            </div>
        </div>
    );
};

export default AllProducts;