import React,{  Component} from "react";

class Js extends Component{
    render(){
        const {title,description} = this.props.js

        return(
            <div>
                <p className="title is-5" >{title}</p>
                <p>{description}</p>
            </div>

        )
    }
}
export default Js