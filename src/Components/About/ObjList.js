import React,{Component} from 'react'
import Table from './Table'
class ObjList extends Component{
    render(){
        const {title,description,url,table} = this.props.about
        const tableList = table.map((table,index)=>{return <Table table={table} key={index} /> })
        return(
            <div className="section" >
                <p className="title has-text-info ">{title}</p>
                <div className="columns">
                    <div className="column is-6">
                        <p className="subtitle has-text-grey ">{description}</p>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <div className="image control">
                                <img className="is-rounded"  src={url} alt="Data not found" />  
                            </div>
                        </div>
                    </div>
                </div>

                 <hr/>
                 <div style={{overflowX:"auto"}} >
                 <table className="table   is-mobile is-tablet is-desktop is-widescreen is-fullhd has-text-grey-darker is-bordered is-striped is-narrow is-hoverable is-fullwidth "  >
                    <thead>
                        <tr>
                            <td className="has-text-info subtitle"style={{fontSize:"17px",textAlign:"center",paddingTop:"8px"}}>Name</td>
                            <td className="has-text-info subtitle" style={{fontSize:"15px",textAlign:"center",paddingTop:"8px"}} >Level</td>
                            <td className="has-text-info subtitle " style={{fontSize:"17px",textAlign:"center",paddingTop:"8px"}}>Role</td>
                            <td className="has-text-info subtitle" style={{fontSize:"17px",textAlign:"center",paddingTop:"8px"}}>Description</td>
                            <td className="has-text-info subtitle" style={{fontSize:"15px",textAlign:"center",paddingTop:"8px"}}>Teqniques</td>
                            <td className="has-text-info subtitle" style={{fontSize:"17px",textAlign:"center",paddingTop:"8px"}}>House of Programming</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableList}
                    </tbody>
                    <tfoot><tr><td colSpan="6" align="center" >House of Programming </td></tr></tfoot>
                </table>
                 </div>
            </div>
        )
    }
}
export default ObjList