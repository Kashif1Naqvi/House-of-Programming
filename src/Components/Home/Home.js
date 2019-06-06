import React,{Component} from 'react'
import Slider from './Slider'
import Facality from './Facality'
import TextSlider from './TextSlider'
class Home extends Component{
	render(){
	return(
		<div>
			<Slider />
			<Facality />
			<TextSlider />
		</div>
	)
}
}

export default Home