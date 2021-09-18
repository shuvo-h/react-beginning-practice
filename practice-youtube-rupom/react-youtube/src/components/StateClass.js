import React,{Component} from "react";
class StateClass extends Component{
    constructor(){
        super();
        const weatherObject = {
            name: "Weather", 
            status: "Changeable",
            location: [
                {locationName: "Dhaka", Temp: 30},
                {locationName: "Khulna", Temp: 33},
                {locationName: "Rajshahi", Temp: 36},
                {locationName: "Comilla", Temp: 32}
            ]
        };

        this.state = weatherObject;
    }

    render(){
        return(
            <div>
                <h3>Show state data</h3>
                <p>Event Name: {this.state.name}</p>
                <p>Event Status: {this.state.status}</p>
            </div>
        )
    }
}

export default StateClass;