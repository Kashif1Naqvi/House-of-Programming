import React,{Component} from 'react'
import HtmlVersion from './HtmlVersion'
import Markup from './Markup'
import Delivery from './Delivery'
class HtmlList extends Component{
    constructor(props){
        super(props)
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
        const {title,description,development,version,markup,delivery} = this.props.html
        return(
            <div>
                <p className="title is-5 " >{title}</p>
                <p>{description}</p>
                <p>{development}</p>
               {
                   !this.state.show ? <button onClick={this.handleShow}  className="button is-primary is-outlined" >Show more</button>
                   :(
                        <div> 
                            <HtmlVersion  versions={version}    /> 
                            <Markup       markups={markup}      />
                            <Delivery deleverys={delivery} />
                            <button onClick={this.handleShow}  className="button is-primary is-outlined" >Show Less</button>
                        </div>)
               }
            </div>
        )
    }
}
export default HtmlList