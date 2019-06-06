import React,{Component} from 'react'

class BasicList extends Component{
    render(){
        const {title,description} = this.props.basic
        return(
            <div>
                <p className="title  has-text-grey-light " >{title.toUpperCase()}</p>
                <p>{description}</p>
            </div>
        )
    }
}
export default BasicList