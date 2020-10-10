import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactInfo from './ContactInfo';

export default class ContactContent extends Component {
    render() {
        return (
            <div className="contactus-area bg-gray pt--120 pb--120">
                <Container>
                    <div className="contactus-inner">
                        <div id="google_map" />

                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <div className="comment-form">
                                    <Row>
                                        <Col lg={{ span: 8, offset: 2 }}>
                                            <h2 className="cnt-title">
                                                Fill the form for contact. It’s very easy.
                                            </h2>
                                        </Col>
                                    </Row>
                                    <form action="/">
                                        <Row>
                                            <Col md={6}>
                                                <input type="text" placeholder="First Name:" />
                                            </Col>
                                            <Col md={6}>
                                                <input type="text" placeholder="Last Name:" />
                                            </Col>
                                            <Col md={12}>
                                                <textarea
                                                    name="msg"
                                                    id="msg"
                                                    placeholder="Message"
                                                />
                                            </Col>
                                        </Row>
                                        <button type="submit" className="cbtn">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <ContactInfo />
                </Container>
            </div>
        );
    }
}
