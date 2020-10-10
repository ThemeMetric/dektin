import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

class Counter extends Component {
    render() {
        return (
            <div className="counter-area">
                <Container>
                    <Row>
                        <Col col={6} lg={3}>
                            <div className="counter-item">
                                <h3 className="counter">
                                    <CountUp start={0} end={385} duration={5} />
                                </h3>
                                <p>Line of Codes</p>
                            </div>
                        </Col>

                        <Col col={6} lg={3}>
                            <div className="counter-item">
                                <h3 className="counter">
                                    <CountUp start={0} end={253} duration={5} />
                                </h3>
                                <p>Active User</p>
                            </div>
                        </Col>
                        <Col col={6} lg={3}>
                            <div className="counter-item">
                                <h3 className="counter">
                                    <CountUp start={0} end={943} duration={5} />
                                </h3>
                                <p>Cup of Coffee</p>
                            </div>
                        </Col>
                        <Col col={6} lg={3}>
                            <div className="counter-item">
                                <h3 className="counter">
                                    <CountUp start={0} end={438} duration={5} />
                                </h3>
                                <p>Total Downloads</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Counter;
