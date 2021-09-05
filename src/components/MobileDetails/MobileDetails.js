import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Table } from 'react-bootstrap'
import mimage from '../../asset/image/fixed image.jpg'
import '../../asset/css/Custom.css'

export default class MobileDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}><img className="mobileDetailImg" src={mimage} alt="" /></Col>
                        <Col className="mt-5 mb-5" lg={12} mg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore eius tempora autem quis sequi nostrum soluta! Rerum earum aliquam nesciunt cumque.</p>
                        </Col>
                        <Col lg={12} mg={12} sm={12}>
                            <Table striped bordered hover>
                            
                                <tbody>
                                    <tr>
                                    <th>Camera</th>
                                    <td>Main<br/>Selfie<br/>Video</td>
                                    </tr>
                                    <tr>
                                    <th>Display</th>
                                    <td>Display Name<br/>Display Size<br/>Display Resulation </td>
                                   
                                    </tr>
                                    <tr>
                                    <th>Processor</th>
                                    <td>Processor name<br/>CPU</td>
                                    
                                    </tr>
                                    <tr>
                                    <th>Storage</th>
                                    <td>Ram<br/>Rom</td>
                                    </tr>
                                     <tr>
                                    <th>Battery</th>
                                    <td>Amp<br/>Fast Charging</td>
                                    </tr>
                                     <tr>
                                    <th>Sensor</th>
                                    <td>Fingerprint<br/>Face Unlock</td>
                                    </tr>

                                </tbody>
                                </Table>

                        </Col >
                        <Col className="mt-5 mb-5" lg={12} mg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore eius tempora autem quis sequi nostrum soluta! Rerum earum aliquam nesciunt cumque.</p>

                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
