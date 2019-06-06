import React,{Component} from 'react'
class States extends Component{
    render(){
        const {title,description} = this.props.state
        return(
            <div>
                <p className="title has-text-grey" >{title}</p>
                <p className="has-text-grey-light is-italic ">{description}</p>
            </div>
        )
    }
}
export default States