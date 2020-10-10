import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Herothumb from '../../assets/images/hero-right-thumb.png';
import Herobg from '../../assets/images/herobg-shape.png';
import ResponsiveModal from './Modal';

class HeroArea extends Component {
    render() {
        return (
            <div className="hero-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={10}>
                            <div className="hero-content">
                                <h2>
                                    We create high quality products that{' '}
                                    <span>will make your </span>
                                    life better.
                                </h2>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate henderit in
                                    voluptat non proident.
                                </p>

                                <ResponsiveModal />
                            </div>
                        </Col>
                        <Col lg={{ span: 5, offset: 2 }}>
                            >
                            <div className="hero-right-thumb">
                                <img src={Herothumb} alt="right thumb" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <img src={Herobg} alt="herobg-shape" className="hero-bg-shape" />
            </div>
        );
    }
}

export default HeroArea;
