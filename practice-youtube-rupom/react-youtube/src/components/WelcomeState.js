import React,{Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();
        this.state = {
            team : "Argentina",
            status : "Goal",
            goalNumber : 2,
            Year : 2021
        }
    }

    render(){
        return(
            <div>
                <h2>Team Name: <i>{this.state.team}</i></h2>
                <p>{this.state.status} : <strong>{this.state.goalNumber}</strong></p>
                <p>Playing Year: {this.state.Year}</p>
            </div>
        )
    }
}

export default Welcome;