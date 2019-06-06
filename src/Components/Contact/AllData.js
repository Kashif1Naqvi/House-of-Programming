    import React,{Component} from 'react'
    import Tech from './Tech'
    import {style} from './style'
    class AllData extends Component{
        render(){
            const {description,url,twitter,linkdin,technologies} = this.props.all
            const technology = technologies.map((technology,index)=>{return <Tech technology={technology} key={index} /> })
            return(
                <div>
                            <div className= "columns" >
                            <div className="column  is-4">
                                <div className="field">
                                        <div className="image control">
                                            <img  className="is-rounded" src={url}  height="44" alt="not found"/>
                                        </div>
                                </div>
                                <div style={style}  >
                                    <i>{description}</i>
                        
                                        <b>you follow us on</b><br/>
                                        <a href={twitter}><img className="is-hover-red" src="data:image/png;base64,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" alt="facebook" width="30"  height="30"/></a> 
                                        <a href={linkdin }><img className="is-hover-red" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/220px-Linkedin.svg.png" alt="linkdin" width="30"  height="30"/></a> 
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        {technology}
                        </div>
                </div>
            )
        }
    }
    export default AllData