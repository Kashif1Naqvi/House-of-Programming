import React,{Component} from 'react'
import MarkupList from './MarkupList'
class Markup extends Component{
    render(){
        const markup = this.props.markups.map((markUp,index)=>{ return <MarkupList  markup={markUp} key={index} /> })
        return(
            <div>
                    {markup}
            </div>
        )
    }
}
export default Markup