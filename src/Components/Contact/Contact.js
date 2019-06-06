import React,{Component} from 'react'
import './index.css'
import AllData from './AllData'
import {contactData} from './contactData'
class Contact extends Component{
	render(){
		const data = contactData.contact.map((data,index)=>{return <AllData  all={data} key={index} />})
	return (
		<div>
			<section className="hero is-link is-fullheight header-image"  >
				<div className="hero-body" >
					<div className="container">
						<p className="title">
							{data}
					    </p>
					</div>
				</div>
</section>
		</div>
	)
}
}

export default Contact