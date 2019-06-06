import React,{Component} from 'react'
import { aboutobj } from './aboutobj'
import ObjList from "./ObjList";
class About extends Component{
	render(){
		const objList = aboutobj.map((about,index)=>{return <ObjList key={index} about={about} />})
	return (
		<div className="section" >
				{objList}
		</div>
	)
}
}

export default About