import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Serviceicon4 from '../../assets/images/icon/service-icon4.png';
import Serviceicon5 from '../../assets/images/icon/service-icon5.png';
import Serviceicon6 from '../../assets/images/icon/service-icon6.png';

class Aboutfeature extends Component {
    render() {
        return (
            <div className="service-area ptb--120">
                <Container>
                    <Row>
                        <Col md={4} sm={6}>
                            <div className="svc-item">
                                <div className="icon">
                                    <img src={Serviceicon4} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>History of dektin</h3>
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
                                    <img src={Serviceicon5} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>Our mission</h3>
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
                                    <img src={Serviceicon6} alt="service" />
                                </div>
                                <div className="content">
                                    <h3>Our Vission</h3>
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

export default Aboutfeature;
