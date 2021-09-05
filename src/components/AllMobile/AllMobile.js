import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom'

import mimage from '../../asset/image/fixed image.jpg'

export default class AllMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mobile mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="mobileCard">
                            <Card.Img variant="top" src={mimage} />
                            <Card.Body>
                                <Card.Title className="mobileCardTitle">Card Title</Card.Title>
                                <Card.Text className="mobileCardDes">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link className="linkStyle" to="/mobileDetails"> Details</Link></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                         <Col lg={4} md={6} sm={12}>
                            <Card className="mobileCard">
                            <Card.Img variant="top" src={mimage} />
                            <Card.Body>
                                <Card.Title  className="mobileCardTitle">Card Title</Card.Title>
                                <Card.Text className="mobileCardDes">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link className="linkStyle" to="/mobileDetails"> Details</Link></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                         <Col lg={4} md={6} sm={12}>
                            <Card className="mobileCard">
                            <Card.Img variant="top" src={mimage}/>
                            <Card.Body>
                                <Card.Title className="mobileCardTitle">Card Title</Card.Title>
                                <Card.Text className="mobileCardDes">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link className="linkStyle" to="/mobileDetails"> Details</Link></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
