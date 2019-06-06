import React,{Component} from 'react'
class CaseList extends Component{
 
    render(){
        const {title,description,url} = this.props.obj
        
        return(
            <div className="container" >
                <div className="columns">
                    <div   className="column is-8">
                        <p className="title has-text-grey">{title}</p>
                        <p className="has-text-grey-light is-italic " >{description}</p>
                    </div>
                    <div className="column is-4 ">
                        <iframe width="560" height="615" title="title" src={url} frameBorder="0"  allowFullScreen></iframe>
                    </div>
                </div>
            </div>  
        )
    }
}
export default CaseList