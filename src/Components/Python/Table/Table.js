import React,{Component} from 'react'
import Tab from './Tab'
class Table extends Component{
    render(){
        const {title,description,table} = this.props.table
        const tableData = table.map((tab,index)=>{return <Tab tab={tab} key={index} />}) 
        
        return(
            <div >
                <p className="title is-5 ">{title}</p>
                <p>{description}</p>
                <table className="table" border="1" >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Mutable</th>
                            <th>Description</th>
                            <th>Syntax</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>    
            </div>
                
            
        )
    }
}
export default Table