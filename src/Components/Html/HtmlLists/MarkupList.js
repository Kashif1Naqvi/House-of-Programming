import React,{Component} from 'react'

class MarkupList extends Component{
    render(){
        const { title,description,code } = this.props.markup
        return(
            <div>
                <p className="title is-5 ">{title}</p>
                <p>{description}</p>
                <code>{code}</code>
            </div>
        )
    }
}
export default MarkupList