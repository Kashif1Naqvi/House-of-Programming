import React,{Component} from 'react'

class ThinkAbout extends Component{
    render(){
        const {title,description} = this.props.obj
        return(
            <div>
                <p className="title has-text-grey ">{title}</p>
                <p className="has-text-grey-light is-italic ">{description}</p>
            </div>
        )
    }
}
export default ThinkAbout