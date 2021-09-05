import React, { Component,Fragment } from 'react'
import {Container,Row,Col, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="footerCard">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="footerColumn">
                        


                           
                           
                            <h1 className="footerTitle ml-5" > Legal</h1>
                            <div>
                               <Nav.Link  className="p-0" >
                                   <NavLink exact activeStyle={{color:'#00a8ee'}} className="footerDec" to="/privacy policy">
                                    <h3 className="fooreSubTitle ">Privacy Policy </h3>

                                   </NavLink>
                               </Nav.Link>

                               <Nav.Link className="p-0">
                                   <NavLink exact activeStyle={{color:'#00a8ee'}} className="footerDec" to="/terms & condition">
                                    <h3 className="fooreSubTitle">Terms & Condition </h3>

                                   </NavLink>
                               </Nav.Link>
                            </div>
                            
                           
                            
                            
        

                        </Col>
                         <Col lg={6} md={6} sm={12} className="footerColumn">
                        <h1 className="footerTitle">Information</h1>
                        <h3 className="fooreSubTitle">Email: hasanrabbi01@gmail.com</h3>
                        <h3 className="fooreSubTitle">Mobile: +8801864173000</h3>
                        <h3 className="fooreSubTitle">Dhaka, Bangladesh</h3>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className="footerCredit">All rights reserved by tecreview.com</h3>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
