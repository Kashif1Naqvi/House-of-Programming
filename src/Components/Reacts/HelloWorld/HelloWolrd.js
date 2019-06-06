import React,{Component} from 'react'

class Hello extends Component{
    render(){
        const {title,description,code} = this.props.hello
        return(
            <div>
                <div className="title has-text-grey">{title}</div>
                <div className="has-text-grey-light is-italic" >{description}</div>
                <code>{code}</code>
            </div>
        )
    }
}
export default Hello