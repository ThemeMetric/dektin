import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FooterBottom extends Component {
    render() {
        return (
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col xl={4} lg={4} md={6}>
                            <p>Copyright’2019. All Rights Reserved</p>
                        </Col>

                        <Col xl={4} lg={3} md={6}>
                            <ul className="fb-socials">
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-google-plus" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-skype" />
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={4} lg={5}>
                            <ul className="fb-links">
                                <li>
                                    <Link to="/">Terms</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/">Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Data Rights</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FooterBottom;
