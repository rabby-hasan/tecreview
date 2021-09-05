import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mimage from '../../asset/image/fixed image.jpg'
import '../../asset/css/Custom.css'

export default class AccessoriesDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <img className="accessoriesDetailImg" src={mimage} alt="" />
                        </Col>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore eius tempora autem quis sequi nostrum soluta! Rerum earum aliquam nesciunt cumque.</p>

                        </Col>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <img className="accessoriesDetailImg" src={mimage} alt="" />

                        </Col>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore eius tempora autem quis sequi nostrum soluta! Rerum earum aliquam nesciunt cumque.</p>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}
