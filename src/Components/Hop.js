import React,{Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Reacts from './Reacts/Reacts'
import Redux from './Redux/Redux'
import Html from './Html/Html'
import Css from './Css/Css'
import Javascript from './Javascript/Javascript'
import Python from './Python/Python'
import Ruby from './Ruby/Ruby'
import Sprogramming from './Sprogramming/Sprogramming'
import CaseStudy from './CaseStudy/CaseStudy'
import Contact from './Contact/Contact'
class Hop extends Component{
    constructor(props){
        super(props)
            this.state ={
                isShow:false
            }
            this.handleShow = this.handleShow.bind(this)
    }
    handleShow = () => {
        this.setState(prevState => ({
            isShow: !prevState.isShow
        }))
    }
    render(){
        return(
            <Router>
                <div>
                    <nav className="navbar" role="navigation" aria-label="main navigation"  >
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="#hop" >HOP</Link>
                        
                        <button onClick={this.handleShow} className="navbar-burger burger button is-rounded " target="HOP" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        </div>
                        <div id="HOP"   className={ this.state.isShow ? "" : "navbar-menu"  } >
                            <div className="navbar-start">
                                <Link  to="/" className="navbar-item">Home</Link>
                                <Link  to="/about" className="navbar-item">About</Link>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <Link to="/" className="navbar-link">Programming Languages</Link>
                                    <div className="navbar-dropdown is-boxed ">
                                        <Link className="navbar-item" to="/react" >React</Link>
                                        <Link className="navbar-item" to="/redux" >Redux</Link>
                                        <Link className="navbar-item" to="/html" >Html</Link>
                                        <Link className="navbar-item" to="/css" >CSS</Link>
                                        <Link className="navbar-item" to="/javascript" >Javascript</Link>
                                        <Link className="navbar-item" to="/Ruby" >Ruby</Link>
                                        <Link className="navbar-item" to="/Python" >Python</Link>
                                        <Link className="navbar-item" to="/sProgramming" >System Programming</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                        <Link  to="/caseStudy" className="navbar-item">Case Study</Link>
                                        <Link  to="/contact" className="navbar-item">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={render=> <Home      />}  />
                    <Route path="/about" component={render=> <About    />}  />
                    <Route path="/react" component={render=> <Reacts   />}  />
                    <Route path="/redux" component={render=> <Redux    />}  />
                    <Route path="/html" component={render=> <Html      />}  />
                    <Route path="/css" component={render=> <Css        />}  />
                    <Route path="/javascript" component={render=><Javascript />} />
                    <Route path="/Ruby" component={render=> <Ruby  />}      />
                    <Route path="/Python" component={render=> <Python />}   />
                    <Route path="/sProgramming" component={render=> <Sprogramming />} />
                    <Route path="/caseStudy" component={render=> <CaseStudy />} />
                    <Route path="/contact" component={render=> <Contact />} />
                </div>
            </Router>
        )
    }
}
export default Hop

