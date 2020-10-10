import React, { Component } from 'react';
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Faqrightthumb from '../../assets/images/faq-right-thumb.png';
import Triangleshape1 from '../../assets/images/triangle-shape1.png';

class Faq extends Component {
    render() {
        return (
            <div className="faq-area pt--130 pb--100">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="section-title">
                                <img
                                    className="triangle-shape1"
                                    src={Triangleshape1}
                                    alt="triangle-shape1"
                                />
                                <h2>Frequently Asked Question</h2>
                                <p>
                                    Ut enim ad minim vena quis nostrud exercitation access velit
                                    esse cillum pariatur.
                                </p>
                            </div>

                            <Accordion className="faq-accordion" id="faq-accordion">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <Button className="collapsed">
                                            Where can I download all versions?
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim quis nostrud exercitation
                                            ullamco.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <Button className="collapsed">
                                            How many times will I be charged?
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim quis nostrud exercitation
                                            ullamco.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <Button className="collapsed">
                                            Can I track my daily tasks?
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim quis nostrud exercitation
                                            ullamco.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <Button className="collapsed">
                                            How can I get my refund?
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim quis nostrud exercitation
                                            ullamco.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <Button className="collapsed">
                                            How long do I have access?
                                        </Button>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim quis nostrud exercitation
                                            ullamco.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className="thumb">
                                <img src={Faqrightthumb} alt="faq-right-thumb" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Faq;
