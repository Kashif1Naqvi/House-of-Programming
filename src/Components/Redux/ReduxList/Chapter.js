import React,{Component} from 'react'
import ChList from './ChList'
class Chapter extends Component{
    render(){
        const chapList = this.props.chpt.map((ch,index)=>{ return <ChList ch={ch} key={index}/>  })
            return(
                <div>
                    {chapList}
                </div>
            )
    }
}
export default Chapter