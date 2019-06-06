import React,{Component} from 'react'
import {rData} from './rData'
class Ruby extends Component{
	render(){
		
	return(
		<div className="container" >
			{
				rData.map((data,index)=>{
					return(
						<div key={index} >
							<p className="title is-5 has-text-info" >{data.title}</p>
							{
								data.description==='https://www.ruby-lang.org/en/documentation/' ? <a href={data.description} target="_blank" rel="noopener noreferrer" >Ruby docs</a> :<div><p>{data.description}</p></div>
							}
						</div>
					)
				})
			}
		</div>
	)
}
}

export default Ruby