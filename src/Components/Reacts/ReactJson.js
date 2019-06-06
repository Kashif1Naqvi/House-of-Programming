import React,{Component} from 'react'
import Hello from './HelloWorld/HelloWolrd'
import JSX from './Introducing_JSX/Introducing_JSX'
import Elements from './Rendering_Elements/Rendering_Elements'
import ComponentProps from './Components_Props/Components_Props'
import States from './State/State'
import Think from './Think_React/Think_React';
class ReactJson extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
        this.handleShow = this.handleShow.bind(this)
    }
    handleShow(){
        this.setState(prevState=>({
            show:!prevState.show
        }))
    }
    render(){
                const {hello_world,Introducing_JSX,Rendering_Elements,Components_Props,state,think_React} = this.props.json
                const helloCode = hello_world.map((hello,index)=>{return <Hello key={index} hello={hello} />})
                const introJSX = Introducing_JSX.map((jsx,index)=>{return <JSX jsx={jsx} key={index} /> })
                const elements =Rendering_Elements.map((element,index)=>{return <Elements element={element} key={index}  />  })
                const component = Components_Props.map((component,index)=>{return <ComponentProps key={index} component={component} /> })
                const states = state.map((state,index)=>{return <States state={state} key={index}  /> })
                const think  = think_React.map((think,index)=>{return<Think key={index} think={think} />})
        return(
            <div className="section container" >
                <div>
                {helloCode}
                </div>
                <div>
                {introJSX}
                </div>
                
                    {
                        this.state.show ? (
                            <div>
                                <p>{elements}</p>
                                <p>{component   }</p>
                                <p>{states}</p>
                                <p>{think}</p>
                        </div>):<button className="button is-primary is-medium is-outlined " onClick={this.handleShow} >Read more</button>
                        
                    }
            </div>
        )
    }
}
export default ReactJson