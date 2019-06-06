import React,{Component} from 'react'
class JSX extends Component{
    render(){
        const {title,code,description} = this.props.jsx
        return(
            <div>   
                <p className="title has-text-grey" >{title}</p>
                <code>{code}</code>
                <p className="has-text-grey-light is-italic">{description}</p>
            </div>
        )
    }
}
export default JSX