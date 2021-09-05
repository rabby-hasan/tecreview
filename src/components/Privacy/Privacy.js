import React, { Component,Fragment } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
export default class Privacy extends Component {
    render() {
        return (
            <Fragment>
                <Container className="m-5">
                    <Row>
                        <Col>
                            <h3>Please read our privacy policies carefully:</h3>
                            <p>This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website. We may update these privacy policies from time to time without giving you any prior notice, so please visit this page at any time in order to keep yourself updated.</p>
                            <h3>What personal information do we collect from the people that visit our website?</h3>
                            <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.</p>
                            <h3>When do we collect information?</h3>
                            <p>We collect information from you when you register on our site, subscribe to a newsletter, fill out a form, Open a Support Ticket, enter information on our site or provide us with feedback on our products or services.</p>
                            <h3>How do we use your information?</h3>
                            <p>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested. To improve our website in order to better serve you. To administer a contest, promotion, survey or other site feature. To ask for ratings and reviews of services or products.</p>
                            <h3>How do we protect your information?</h3>
                            <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</p>
                            <h3>Third-party disclosure</h3>
                            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it’s release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property or safety.</p>
                            <h3>Third-party links</h3>
                            <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
