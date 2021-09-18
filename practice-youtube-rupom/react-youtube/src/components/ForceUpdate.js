import React,{Component} from "react";

class RefreshPage extends Component{
    constructor(){
        super()

        this.forceUpdatePage = this.forceUpdatePage.bind(this);
    }

    forceUpdatePage = () => this.forceUpdate();

    render(){
        return (
            <div>
                <p>{Math.random()}</p>
                <button onClick={this.forceUpdatePage}>Refresh</button>
            </div>
        )
    }
}

export default RefreshPage;