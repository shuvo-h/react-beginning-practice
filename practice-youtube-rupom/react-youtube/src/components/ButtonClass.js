import React, { Component } from 'react';

class ButtonClass extends Component{
    classAlert = () => {
        // confirm('Write your password')
        alert('I am working. fix the confirm Fn');
    }
    render(){
        return <div>
            <h3>Welcome to Button class section</h3>
            <p>click on the button to get an alert :( :)</p>
            <button onClick={this.classAlert}>click class</button>
        </div>
    }
}

export default ButtonClass;