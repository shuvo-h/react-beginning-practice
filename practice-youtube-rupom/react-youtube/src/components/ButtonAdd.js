import React from 'react';


const ButtonAdd = (props) => {
    const myAlert = () =>{
        alert('Keep trying! You are learning react.')
    }
    const myPrompt = () => {
        prompt("What is your Name?","anik");
        prompt("What is your password?","anik");
    }
    return(
        <div>
            <h4>Welcome to alert section</h4>
            <p>click on the button to get an alert :( :)</p>
            <button onClick={myAlert}>Get Alert</button>
            <button onClick={myPrompt}>Get Prompt</button>
        </div>
    )
}

export default ButtonAdd;