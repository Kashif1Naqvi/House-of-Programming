import React,{Component} from 'react'
import {cssData} from './cssData'
import CssList from './CSSList/CssList'
class Css extends Component{
	render(){
		const css = cssData.users.map((users,index)=>{ return <CssList css={users} key={index} />  })
	return(
		<div className="container">
			{css}
		</div>
	)
}
}

export default Css