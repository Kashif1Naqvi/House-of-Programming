import React,{Component} from 'react'

class Tab extends Component{
    render(){
        const {type,mutable,description,syntax} = this.props.tab
        return(
            <tr>
                <td>{type}</td>
                <td>{mutable}</td>
                <td>{description}</td>
                <td>{syntax}</td>
            </tr>
        )
    }
}
export default Tab