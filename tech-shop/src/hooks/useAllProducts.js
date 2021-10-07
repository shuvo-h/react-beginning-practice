import { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('/tech-data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return products;
};

export default useAllProducts;