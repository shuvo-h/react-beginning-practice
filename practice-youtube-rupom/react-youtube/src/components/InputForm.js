import React from "react";

const ReactForm = () => {
    const changeForm = () => {
         const inputValue = document.getElementById('03').value;
        if(inputValue){
            document.getElementById('02').innerText = inputValue;
            console.log(inputValue);
        }
    }
    const onChange = (event) => {
        const inputValue = event.target.value;
        document.getElementById('01').innerText = inputValue;
        console.log(inputValue);
    }
    return(
        <div>
            <p>Please fill up the form below</p>
            <p >On change: <i><span id="01"></span></i></p>
            <p >On submit: <strong><span id="02"></span></strong></p>
            <input id="03" type="text" placeholder="write text here" onChange={onChange}/>
            <br />
            <button onClick={changeForm}>Submit</button>
        </div>
    )
} 

export default ReactForm;