import React,{Component} from 'react'

class ChList extends Component{
    render(){
        const {title,description,code} = this.props.ch
            return(
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                    <pre>{code}</pre>
                </div>
            )
    }
}
export default ChList