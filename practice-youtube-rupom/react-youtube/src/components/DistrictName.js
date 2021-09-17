import React,{Component, components} from 'react';

class DistrictName extends Component{
    render(){
        return(
            <div>
            <h3>{this.props.name}</h3>
            <h4>{this.props.division}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur ipsum atque laudantium provident corporis laboriosam cum quam officiis harum?</p>
        </div>
        )
    }
}

export default DistrictName;