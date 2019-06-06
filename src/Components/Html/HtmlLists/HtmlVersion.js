import React,{Component} from 'react'
import Version from './Version'
class HtmlVersion extends Component{
    render(){
        const version = this.props.versions.map((version,index)=>{ return <Version version={version} key={index}  />  })
        return(
            <div>
               {version}  
            </div>
        )
    }
}
export default HtmlVersion