import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Planshape from '../../assets/images/plan-shape.png';
import Triangleshape1 from '../../assets/images/triangle-shape1.png';

class Pricelist extends Component {
    render() {
        return (
            <div className="planlist-area pt--20 pb--120">
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
                            <div className="section-title text-center pb--50">
                                <h2>No additional or hidden costs. Pay for what you use.</h2>
                                <strong>80,000+ User have dektin</strong>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} md={6}>
                            <div className="plan-item">
                                <img src={Planshape} alt="plan-shape" className="plan-shape" />
                                <h5>Indivisual</h5>
                                <h2>$98</h2>
                                <ul>
                                    <li>Everything in Small</li>
                                    <li>Unlimited file storage</li>
                                    <li>50 Projects per month</li>
                                    <li>Premium support</li>
                                    <li>10 GB file storage</li>
                                </ul>
                                <Link to="/" className="cbtn cbtn-outline">
                                    Get Started Now{' '}
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} md={6}>
                            <div className="plan-item active">
                                <img src={Planshape} alt="plan-shape" className="plan-shape" />
                                <h5>Business</h5>
                                <h2>$105</h2>
                                <ul>
                                    <li>Everything in Small</li>
                                    <li>Unlimited file storage</li>
                                    <li>50 Projects per month</li>
                                    <li>Premium support</li>
                                    <li>10 GB file storage</li>
                                </ul>
                                <Link to="/" className="cbtn cbtn-outline">
                                    Get Started Now{' '}
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} md={6}>
                            <div className="plan-item">
                                <img src={Planshape} alt="plan-shape" className="plan-shape" />
                                <h5>Company</h5>
                                <h2>$125</h2>
                                <ul>
                                    <li>Everything in Small</li>
                                    <li>Unlimited file storage</li>
                                    <li>50 Projects per month</li>
                                    <li>Premium support</li>
                                    <li>10 GB file storage</li>
                                </ul>
                                <Link to="/" className="cbtn cbtn-outline">
                                    Get Started Now{' '}
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} md={6}>
                            <div className="plan-item">
                                <img src={Planshape} alt="plan-shape" className="plan-shape" />
                                <h5>Premium</h5>
                                <h2>$205</h2>
                                <ul>
                                    <li>Everything in Small</li>
                                    <li>Unlimited file storage</li>
                                    <li>50 Projects per month</li>
                                    <li>Premium support</li>
                                    <li>10 GB file storage</li>
                                </ul>
                                <Link to="/" className="cbtn cbtn-outline">
                                    Get Started Now{' '}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={Triangleshape1} alt="triangle-shape" className="triangle-shape1" />
            </div>
        );
    }
}

export default Pricelist;
