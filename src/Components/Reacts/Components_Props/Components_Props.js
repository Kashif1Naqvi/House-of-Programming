import React,{Component} from 'react'

class ComponentProps extends Component{
    render(){
        const {title,description} = this.props.component
        return(
                <div>
                    <p className="title has-text-grey ">{title}</p>
                    <p className="has-text-grey-light is-italic">{description}</p>
                </div>
            )
    }
}
export default ComponentProps