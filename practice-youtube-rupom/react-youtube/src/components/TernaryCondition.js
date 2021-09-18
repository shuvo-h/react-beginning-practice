import React,{Component} from "react";

class TernaryCondition extends Component{
    constructor(){
        super()
    
        this.state = { log: false};
    }
    
    isLog = (props) => this.setState({log:props});
    
    render(){
        return(
            this.state.log ? <button onClick={this.isLog.bind(this,false)}>Log Out</button> : <button onClick={this.isLog.bind(this,true)}>Log In</button> 
        )
    }

}

export default TernaryCondition;

/*

*/

