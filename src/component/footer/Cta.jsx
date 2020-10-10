import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <div className="cta-area">
                <Container>
                    <div className="cta-inner">
                        <Row className="align-items-center">
                            <Col lg={{ span: 6, offset: 1 }}>
                                <h2>Love offers and discounts? Contact with us today.</h2>
                                <p>Try dektin for 14 days, for free!</p>
                            </Col>

                            <Col lg={4}>
                                <div className="btn-rightalign">
                                    <Link to="/" className="cbtn cbtn-square">
                                        Started Today
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Cta;
