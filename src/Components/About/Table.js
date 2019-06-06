import React,{Component} from 'react'

class Table extends Component{
    render(){
        const { name,expertyLevel,role,description,teqniques,houseOfCoding } = this.props.table
        return(
            <tr>
                <td>{name}</td>
                <td >{expertyLevel}</td>
                <td>{role}</td>
                <td  >{description}</td>
                <td>{teqniques}</td>
                <td>{houseOfCoding}</td>
            </tr>
        )
    }
}
export default Table