import React,{Component} from 'react'
import {sProgramming} from './sProgramming'
class Sprogramming extends Component{
	render(){
	return <div className="container" >{
		sProgramming.map((p,index)=>{
			return(
				<div key={index}>
					<p className="title is-title has-text-info" >{p.title}</p>
					<p>{p.description}</p>
				</div>
			)
		})
	}</div>
}
}

export default Sprogramming