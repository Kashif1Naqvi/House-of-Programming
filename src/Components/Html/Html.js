import React,{Component} from 'react'
import {htmlData} from './htmlData'
import HtmlList from './HtmlLists/HtmlList'
class Html extends Component{
	render(){
		const html = htmlData.html.map((html,index)=>{ return <HtmlList  html={html} key={index}  /> })
	return(
		<div className="container  " >
			{html}
		</div>
	)
}
}

export default Html