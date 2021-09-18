import React,{Component} from "react";

class ChangeName extends Component{
    constructor(){
        super();
        
        this.state = {
            country: "America"
        }
    }
    
    switchLocation(props){
        this.setState({country:props})
    }
  
    render(){
        return(
            <div>
                <p><strong><i>{this.state.country}</i></strong></p>
               
                <button onClick={this.switchLocation.bind(this,"Bangladesh")}>Switch Location</button>
                <button onClick={this.switchLocation.bind(this,"India")}>Switch Location</button>
            </div>
        )
    }
}

export default ChangeName;