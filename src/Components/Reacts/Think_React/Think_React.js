import React,{Component} from 'react'
class Think extends Component{
    render(){
        const {title,description} = this.props.think
        return(
            <div>
                <p className="title has-text-grey ">
                    {title}
                </p>
                <p className="has-text-grey-light">
                    {description}
                </p>

            </div>
        )
    }
}
export default Think