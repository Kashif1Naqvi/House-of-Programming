import React,{Component} from 'react'

class Version extends Component{
    render(){
        const {title,date,description} = this.props.version
        return(
            <div>
                <p className="title is-5 " > {title}</p>
                <p>{date}</p>
                <p>{description.toString()}</p>
            </div>
        )
    }                                                                   
}
export default Version