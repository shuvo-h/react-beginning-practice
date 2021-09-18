import React, { useState } from "react";

const DynamicCount = (props) => {
    const [charge, setCharge] = useState(100)

    const titleStyle = {
        color : "green"
    }
    const chargeUpControl = (props) => charge < 100 ? setCharge(charge + 10) : 0;
    const chargeLowControl = (props) => charge > 0 ? setCharge(charge - 10) : 0;

    
    return(
        <div className='card'>
            <h1 style={titleStyle}>{props.name} ({props.color})</h1>
            <h2>Tk. {props.price}</h2>
            <h4>Battery Charge {charge}</h4>
            <button style={{padding:'8px 15px', borderRadius:"5px", backgroundColor:"purple", color:'white', fontWeight:"700"}} onClick={chargeUpControl}>Price +</button>
            <button style={{padding:'8px 15px', borderRadius:"5px", backgroundColor:"purple", color:'white', fontWeight:"700"}} onClick={chargeLowControl}>Price -</button>
            <p style={{padding:'10px', backgroundColor:'pink'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi numquam quam velit eveniet, blanditiis, voluptatum nemo voluptatibus cumque eos ratione ab optio, possimus autem ex molestias impedit? Non voluptates commodi animi fugit hic consequatur delectus aspernatur distinctio ex consectetur cumque, rem reiciendis molestias quibusdam voluptatibus veniam veritatis illum. Quis, nam.</p>
        </div>
    )
        
}

export default DynamicCount;