import React,{Component} from 'react'
import BasicList from './BasicList'
class Basic extends Component{
    render(){
        const basic = this.props.basics.map((basic,index)=>{ return  <BasicList  basic={basic} key={index} /> })
        return(
            <div>
                {basic}
            </div>
        )
    }
}
export default Basic