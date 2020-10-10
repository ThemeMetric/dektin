import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footershape1 from '../assets/images/footer-shape1.png';
import Footershape2 from '../assets/images/footer-shape2.png';
import Footerlogo from '../assets/images/icon/logo.png';

class FooterTop extends Component {
    render() {
        return (
            <div className="footer-top ptb--120">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="widget widget-company">
                                <div className="flogo">
                                    <Link to="/">
                                        {' '}
                                        <img src={Footerlogo} alt="logo" />
                                    </Link>
                                </div>
                                <h5>(816) 368-1181</h5>
                                <h5>hello@themis.com</h5>
                                <h5>9353 Garfield Street Reno, NV 89523</h5>
                            </div>
                        </Col>
                        <Col lg={{ offset: 1 }}>
                            <div className="widget widget-features">
                                <h4 className="widget-title">Features</h4>
                                <ul className="list">
                                    <li>
                                        <Link to="/">Analytics</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Activity</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Windows</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Appale</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="widget widget-about">
                                <h4 className="widget-title">About</h4>
                                <ul className="list">
                                    <li>
                                        <Link to="/">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Company</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Resource</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="widget widget-product">
                                <h4 className="widget-title">Product</h4>
                                <ul className="list">
                                    <li>
                                        <Link to="/">Enterprise</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Customer</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Stories</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div className="widget widget-legal">
                                <h4 className="widget-title">Legal</h4>
                                <ul className="list">
                                    <li>
                                        <Link to="/">Terms of use</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Subscription</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Privacy Polity</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Report Violation</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Cancelation</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <img className="footer-shape1" src={Footershape1} alt="footer-shape1" />
                <img className="footer-shape2" src={Footershape2} alt="footer-shape1" />
            </div>
        );
    }
}

export default FooterTop;
