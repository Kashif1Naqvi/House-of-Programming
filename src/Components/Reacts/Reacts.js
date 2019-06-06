import React,{Component} from 'react'
import {reactJson} from './reactdata'
import ReactJson from './ReactJson'
class Reacts extends Component{
	render(){
		const reactJsonList = reactJson.map((json,index)=>{return <ReactJson json={json} key={index} /> })
	return (
				<div>
					{reactJsonList}
				</div>
			)
}
}

export default Reacts