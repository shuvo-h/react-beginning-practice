import React from 'react';

const ButtonParameter = (props) => {
    let count = 1;
    const numberGenerate = (productName) =>{
        console.log(count, productName );
        count++;
    }
    return(
        <div>
            <h4>Welcome to alert section</h4>
            <p>click on the button to get an alert :( :)</p>
            <button onClick={numberGenerate.bind(this, props.itemName)}>Increase {props.itemName}</button>
        </div>
    )
}

export default ButtonParameter;