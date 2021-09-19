import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

const RenderCustomDom = () =>{
    const [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])
    const imageStyle = {
        height: '150px',
    }
    const [quantity,setQuantity] = useState(0)
    const increaser = () => setQuantity(quantity+1)
    const decreaser = () => quantity > 0 ? setQuantity(quantity-1) : 0;

    const ProductComponent = props => {
        // console.log(props); //never use cost as a product id, now for just practice purpose
        return(
            <div className="card"> 
                <div style={imageStyle}>
                    <img style={{height:"100%"}}  src={props.image} alt="" />
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h4>Price: {props.cost}</h4>
                    <button onClick={increaser}>+</button><span>  {quantity}  </span><button onClick={decreaser}>-</button>
                    <p>{props.category} section</p>
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }
    const alertMe = () => alert("hi bye");
    const write = () => {
        const containerID = document.getElementById('element-container');
        const newElement = <p>Lorem </p>
        ReactDOM.render(newElement,containerID,alertMe)  //why is it not working
    }
    return(
        <div style={{display:"grid", gridTemplateColumns: 'repeat(4,1fr)'}}>
            <div>
                <p><strong>Write somthing in Empty Column</strong></p>
                <button onClick={write}>write here</button>
            </div>
                <div >
                <p id='element-container'>Write a demo text</p>
                </div>
            {
                products.map(product => <ProductComponent title={product.title} category={product.category} description={product.description} cost={product.price} image={product.image}></ProductComponent>)
            }
        </div>
    )
}

export default RenderCustomDom;