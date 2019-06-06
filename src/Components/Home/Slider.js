import React,{Component} from 'react'
import { Zoom } from  'react-slideshow-image'
import {images} from './images'
const zoomOutProperties = {
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true,
    scale:0.4,
    }

class Slider extends Component{   
    render(){
        return(
            <section className="section" >
                <Zoom {...zoomOutProperties} >
                {
                    images.map((image,index)=>{
                       return(
                           <div key={index} className="field" >
                                <figure className="image">
                                    <img  src={image} alt="data not found" key={index}  style={{backgroundSize:"cover"}}  />
                                </figure>
                           </div>
                       )
                    })
                }
            </Zoom>
            </section>
            )
    }
}
export default Slider