import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import { Container,Navbar,Nav } from 'react-bootstrap'
import '../../asset/css/Custom.css'

export default class TopNavigation extends Component {
  constructor(props){
    super();
    this.state={
      pageTitle:props.title
    }
  }
    render() {
        return (
            <Fragment>
              <title>{this.state.pageTitle}</title>
                <Navbar fixed='top' className="navBar" collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand className="navTitle"><NavLink className="navTitle" to="/">Tecreview</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
    </Nav>
    <Nav>
      <Nav.Link>
      <NavLink exact activeStyle={{color:'#00a8ee'}} className="navSubtitle" to="/">Home</NavLink>
        
      </Nav.Link>
      <Nav.Link>
      <NavLink exact activeStyle={{color:'#00a8ee'}} className="navSubtitle" to="/mobile">Mobile</NavLink>

      </Nav.Link>
      <Nav.Link>
      <NavLink exact activeStyle={{color:'#00a8ee'}} className="navSubtitle" to="/laptop">Laptop</NavLink>

      </Nav.Link>
      <Nav.Link>
      <NavLink exact activeStyle={{color:'#00a8ee'}} className="navSubtitle" to="accessories">Accessories</NavLink>

      </Nav.Link>


      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </Fragment>
        )
    }
}
