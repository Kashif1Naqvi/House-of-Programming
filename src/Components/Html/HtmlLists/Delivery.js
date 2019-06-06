import React,{Component} from 'react'
import DeliveryList from './DeliveryList'
class Delivery extends Component{
    render(){
        const delivery = this.props.deleverys.map((delevery,index)=>{return <DeliveryList delevery={delevery} key={index}  />})
        return(
            <div>
                {delivery}
            </div>
        )
    }
}
export default Delivery