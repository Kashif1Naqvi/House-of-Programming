import React,{Component} from 'react'
class CssList extends Component{
    render(){
        const {title,description,table} = this.props.css
        console.log(table)
        return(
            <div>
                <p className="title is-5" >{title}</p>
                <p>{description}</p>
            </div>
        )
    }
}
export default CssList