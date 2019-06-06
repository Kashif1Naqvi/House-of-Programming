import React,{Component} from 'react'
import {reduxData} from './reduxData'
import RList from './ReduxList/RList'
class Redux extends Component{
	render(){
		const rData  = reduxData.redux.map((redux,index)=>{return <RList key={index} redux={redux} />})
	return(
		<div className="container" >
				{rData}
		</div>
	)
}
}

export default Redux