import React,{Component} from 'react'
import {pData} from './pData'
import Pythons from './PythonList/PythonList'
import Table from './Table/Table'
class Python extends Component{
	constructor(props){
		super(props)
		this.state = { show:false }
		this.handleShow = this.handleShow.bind(this)
	}
	handleShow(){
		this.setState(prevState => ({
			show: !prevState.show
		}))
	}
	render(){
		const pythonData  = pData.python.map((python,index)=>{return  <Pythons python={python} key={index} />}) 
		const table  = pData.python_Table.map((table,index)=>{return <Table table={table} key={index} />})
	return (
		<div className="container">
			{pythonData}
			{!this.state.show ? ( <button className="button is-primary" onClick={this.handleShow} >Show more</button> ):(<div >{table}</div>) }
		</div>
	)
}
}

export default Python