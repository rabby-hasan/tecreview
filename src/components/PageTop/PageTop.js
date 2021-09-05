import React, { Component,Fragment } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export default class PageTop extends Component {
    render() {
        return (
            <Fragment>
                
                       <Container fluid={true} className="pageTopFixedBanner p-0">
                  <div className="pageTopBannerOverlay">
                    <Container className="pagetopContent">
                          <Row>
                          <Col>
                          <h1 className="pageContentTitle">{this.props.pagetitle}</h1>
                          </Col>
                      </Row>
                    </Container>

                  </div>
                </Container>
            </Fragment>
        )
    }
}
