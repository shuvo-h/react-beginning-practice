import React from "react";
import { ReactDOM } from "react";

const ReactDomRender = () => {
    const changeText = () => {
        const container = document.getElementById('myID');
        const element = <p>I have changed myself</p>
        ReactDOM.render(element,container)
    }
    return(
        <div>
            <button onClick={changeText}>change</button>
            <p id="myID">I am React</p>
        </div>
    )
}

export default ReactDomRender;