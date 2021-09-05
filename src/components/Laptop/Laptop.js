import React, { Component,Fragment } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import mimage from '../../asset/image/fixed image.jpg'
import {Link} from 'react-router-dom'

export default class Laptop extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="Title">Laptop</h1>

                    <Row>
                        <Col lg={6} md={12} sm={12}  className="laptopCard">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="laptopImg"  src={mimage} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="laptopCardTitle">Laptop Name</h5>
                                    <p className="laptopCardDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Link to="/laptopDetails" className="laptopCardDetails" >Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="laptopCard">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="laptopImg" src={mimage} alt="" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                     <h5 className="laptopCardTitle">Laptop Name</h5>
                                    <p className="laptopCardDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Link to="/laptopDetails" className="laptopCardDetails" >Details</Link>


                                </Col>
                            </Row>
                        </Col>
                            <Col lg={6} md={12} sm={12} className="laptopCard">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="laptopImg" src={mimage} alt="" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                     <h5 className="laptopCardTitle">Laptop Name</h5>
                                    <p className="laptopCardDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Link to="/laptopDetails" className="laptopCardDetails" >Details</Link>


                                </Col>
                            </Row>
                        </Col>
                            <Col lg={6} md={12} sm={12} className="laptopCard">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="laptopImg" src={mimage} alt="" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                     <h5 className="laptopCardTitle">Laptop Name</h5>
                                    <p className="laptopCardDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Link to="/laptopDetails" className="laptopCardDetails" >Details</Link>


                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
