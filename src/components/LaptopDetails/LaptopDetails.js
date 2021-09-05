import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Table} from 'react-bootstrap'
import mimage from '../../asset/image/fixed image.jpg'
import '../../asset/css/Custom.css'

export default class LaptopDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <img className="laptopDetailImg" src={mimage} alt="" />
                        </Col>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore eius tempora autem quis sequi nostrum soluta! Rerum earum aliquam nesciunt cumque.</p>
                            
                        </Col>
                        <Col className="mb-5 mt-5" lg={12} mg={12} sm={12}>
                            <Table striped bordered hover>
                            
                                <tbody>
                                    <tr>
                                    <th>Processor</th>
                                    <td>Main</td>
                                    </tr>
                                    <tr>
                                    <th>Graphics</th>
                                    <td>Display Name </td>
                                   
                                    </tr>
                                    <tr>
                                    <th>Display</th>
                                    <td>Resulation<br/>CPU</td>
                                    
                                    </tr>
                                    <tr>
                                    <th>RAM</th>
                                    <td>Gb</td>
                                    </tr>
                                    <tr>
                                    <th>Storage</th>
                                    <td>HDD</td>
                                    </tr>
                                     <tr>
                                    <th>Battery</th>
                                    <td>Amp</td>
                                    </tr>
                                     <tr>
                                    <th>Dimension</th>
                                    <td>Length<br/>Width</td>
                                    </tr>
                                      <tr>
                                    <th>Weight</th>
                                    <td>Lbs<br/>Kg</td>
                                    </tr>
                                      <tr>
                                    <th>Color</th>
                                    <td>Length</td>
                                    </tr>

                                </tbody>
                                </Table>

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
