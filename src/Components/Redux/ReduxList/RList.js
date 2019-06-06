import React,{Component} from 'react'
import Chapter from './Chapter'
import Basic from './Basic'
class RList  extends Component{
    render(){
        const {title,description,chapter2,basic,url} = this.props.redux
        return(
            <div>
                <p className="title  has-text-grey-light ">{title}</p>
                <div className="fields">
                    <div className="image control ">
                        <img src={url} alt="data not found" />
                    </div>
                </div>
                <p>{description}</p>
                    <Chapter chpt={chapter2} />
                    <Basic    basics={basic} />
            </div>
        )
    }
}
export default RList