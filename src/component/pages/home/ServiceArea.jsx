import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Serviceicon1 from '../../assets/images/icon/service-icon1.png';
import Serviceicon2 from '../../assets/images/icon/service-icon2.png';
import Serviceicon3 from '../../assets/images/icon/service-icon3.png';

class ServiceArea extends Component {
    render() {
        return (
            <div className="service-area ptb--120">
                <Container>
                    <Row>
                        <Col md={4} sm={6}>
                            <div className="svc-item">
                                <div className="icon">
                                    <img src={Serviceicon1} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>Advanced Analytics</h3>
                                    <p>
                                        Explore the far reaches of galaxy henderit with this space
                                        themed dummy proident generator with quotes
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} sm={6}>
                            <div className="svc-item active">
                                <div className="icon">
                                    <img src={Serviceicon2} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>Multimedia Archives</h3>
                                    <p>
                                        Explore the far reaches of galaxy henderit with this space
                                        themed dummy proident generator with quotes
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} sm={6}>
                            <div className="svc-item">
                                <div className="icon">
                                    <img src={Serviceicon3} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>Get Notification</h3>
                                    <p>
                                        Explore the far reaches of galaxy henderit with this space
                                        themed dummy proident generator with quotes
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ServiceArea;
