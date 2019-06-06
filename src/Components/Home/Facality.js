import React,{Component} from 'react'
import {facalityes} from "./facalityes"
import './style.css'
class Facality extends Component{
    constructor(props){
        super(props)
        this.state = {
            facalityShow:false
        }
        this.handleFacalityShow = this.handleFacalityShow.bind(this)
    }
    handleFacalityShow = () =>{
        this.setState(prevState=>({
            facalityShow : !prevState.facalityShow
        }))
    }
    render(){
            if(this.state.facalityShow){
                return (
                    <div  className="container section columns is-multiline">
                       {  facalityes.map((faca,index)=>{
                        return(
                            <div key={index}  className="column is-6  " >
                                <div className="column is-12">
                                    <div key={index} className="card" >
                                </div>
                                <div className="column is-12" >
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img src={faca.url} alt={faca.alt}/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media-content">
                                                <p className="title is-4 has-text-primary "><i>{faca.name.toUpperCase()}</i></p>
                                                <p className="subtitle is-6 "><b>{faca.role}</b></p>
                                            </div>
                                            <div className="content">
                                                <p className="subtitle is-centered has-text-lightgrey " >{faca.description.toLowerCase()}</p>
                                            </div>
                                        </div>
                                </div>
                            </div> 
                             </div>
                        )
                    })}
                        <button className="button is-primary is-rounded is-centered  " style={{float:"right",marginLeft:"450px"}} onClick={this.handleFacalityShow} >Hide</button>
                    </div>
                )
            }else{
                return (
                    <div className="box has-text-centered" >
                         <button className="button is-primary is-rounded " onClick={this.handleFacalityShow} >Click here to see Facality</button>
                    </div>
                    )

            }
        }
        
    }

export default Facality