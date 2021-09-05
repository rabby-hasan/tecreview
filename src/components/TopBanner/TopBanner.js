import React, { Component, Fragment } from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap';
import '../../asset/css/Custom.css'
export default class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                  <div className="topBannerOverlay">
                    <Container className="topContent">
                          <Row>
                          <Col>
                          <h1 className="contentTitle">All About Tecnology</h1>
                          <h3 className="contentSubTitle">Mobile, Laptop & Accessories</h3>
                          <Button variant="primary">More info</Button>
                          </Col>
                      </Row>
                    </Container>

                  </div>
                </Container>
            </Fragment>
        )
    }
}
