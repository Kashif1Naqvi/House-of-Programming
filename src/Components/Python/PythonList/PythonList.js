import React,{Component} from 'react'

class PythonList extends Component{
    render(){
        const {title,description} = this.props.python
        return(
            <div>
                <p className="title is-5 ">{title}</p>
                <p>{description}</p>
            </div>
        )
    }
}
export default PythonList