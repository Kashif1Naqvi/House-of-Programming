import React,{Component} from 'react'
import {Zoom} from 'react-slideshow-image'
import {textInfo} from './textInfo'

const properties = {
    duration:8000,
    transitionDuration:500,
    indicators:true,
    scale:0.4,
    arrow:true.toString(),
    infinite:true
}
class TextSlider extends Component{
    render(){
        return(
            <Zoom {...properties} className="container is-centered" style={{width:"100%"}} >
                    {
                        textInfo.map((text,index)=>{
                            return(
                                <div key={index}   style={{textAlign:"center",marginLeft:"41px",padding:"40px"}} >
                                        <p className="subtitle is-5 " >{text.text}</p>
                                        <p><i>{text.by}</i></p>
                                </div>
                            )
                        })
                    }
            </Zoom>
        )
    }
}
export default TextSlider