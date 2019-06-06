import React,{Component} from 'react'
import {jsData} from './jsData'
import Js from "./JS/Js";
import Features from "./JS/Features/Features";
class Javascript extends Component{
	constructor(props){
		super(props)
		this.state = {show:false}
		this.handleShow = this.handleShow.bind(this)
	}
	handleShow(){
		this.setState(prevState=>({
			show:!prevState.show
		}))
	}

	render(){
		const js  =jsData.js.map((js,index)=>{return  <Js js={js} key={index} />})
		const feature = jsData.features.map((feature,index)=>{return <Features feature={feature} key={index}  /> })
	return(
		<div className="container" >
			{js}
			{
				!this.state.show ? <button className="button is-primary is-outlined" onClick={this.handleShow} >Show more</button>:<div>{feature}</div>
			}
		</div>
	)
}
}

export default Javascript