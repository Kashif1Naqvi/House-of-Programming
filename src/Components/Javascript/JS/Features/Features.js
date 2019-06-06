import React, { Component } from "react";

class Features extends Component{
    render(){
        const {title,description} = this.props.feature
        return(
            <div>
                <p className="title is-5" >{title}</p>
                <p>{description}</p>
            </div>
            
        )
    }
}
export default Features