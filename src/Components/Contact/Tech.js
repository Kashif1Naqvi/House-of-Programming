import React,{ Component } from "react"
import {style} from './style'
class Tech extends Component{
    render(){
        const {title,description,img} = this.props.technology
        return(
            <div>
                <div className="columns" >
                    <div className="column is-4 " style={style} >
                        <u>{title}</u>
                    </div>
                    <div className="column is-4" style={style}>
                        <i>{description}</i>
                    </div>
                    <div className="column is-4" style={style}>
                    <div className="field">
                            <div className="image control ">
                                <img className="is-rounded"  src={img} alt="not found"  />
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
export default Tech