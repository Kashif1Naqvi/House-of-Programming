import React,{Component} from 'react'

class DeliveryList extends Component{
    render(){
        const {title,description} = this.props.delevery
        return(
            <div>
                <p className="title -is-5" >{title}</p>
                <p>{description}</p>
            </div>
        )
    }
}
export default DeliveryList