import React,{Component} from 'react'
import {caseObj} from './caseObj'
import CaseList from './Cases/CaseList'
import ThinkAbout from './Cases/ThinkAbout'
class CaseStudy extends Component{
	constructor(props){
        super(props)
        this.state = {
            show:false
        }
        this.handleShow = this.handleShow.bind(this)
    }
    handleShow=()=>{
        this.setState(prevState=>({
            show:!prevState.show
        }))
    }
	render(){
	const caseList = caseObj.study.map((obj,index)=>{ return <CaseList obj={obj} key={index}  /> })
	const ThinkList = caseObj.thinks.map((obj,index)=>{ return <ThinkAbout obj={obj} key={index}  /> })
	return (<div className="container" >
				{caseList}
				{
					!this.state.show ? <button onClick={this.handleShow} className="button is-primary has-text-centered " >Show more</button>:ThinkList
				}
			</div>)
}
}

export default CaseStudy