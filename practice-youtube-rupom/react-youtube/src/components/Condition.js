import React,{Component} from "react";

class LoginCondition extends Component{
    constructor(){
        super()

        this.state = {
            login: false
        }
    }
    changeLogin = (props) => {
        this.setState({login: props})
        console.log(this.props);
    }
    render(){
        if(this.state.login == true){
            return <button onClick={this.changeLogin.bind(this,false)}>Log Out</button>
        }else{
            return <button onClick={this.changeLogin.bind(this,true)}>Log In</button>
        }
        
    }
}

export default LoginCondition;