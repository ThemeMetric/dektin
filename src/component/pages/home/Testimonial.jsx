import 'owl.carousel/dist/assets/owl.carousel.css';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import Textquotes from '../../assets/images/icon/text-quotes.png';
import Testimonialrightthumb from '../../assets/images/testimonial-right-thumb.png';
import Triangleshape1 from '../../assets/images/triangle-shape1.png';

export default class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-area ptb--100">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <OwlCarousel
                                smartSpeed={800}
                                margin={0}
                                items={1}
                                className="testimonial-carousel"
                            >
                                <div className="tst-item">
                                    <img src={Triangleshape1} alt="triangle-shape1" />
                                    <img
                                        className="text-quotes"
                                        src={Textquotes}
                                        alt="text-quotes"
                                    />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitatio ullamco
                                        laboris nisi ut aliquip ex ea commodo cons quat. Duis aute
                                        irure dolor in reprehenderit in volup tate velit esse cillum
                                        dolore eu fugiat nulla pariatur excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia.
                                    </p>
                                    <h4>Randal Francis</h4>
                                    <strong>Creative Directior</strong>
                                </div>

                                <div className="tst-item">
                                    <img src={Triangleshape1} alt="triangle-shape1" />
                                    <img
                                        className="text-quotes"
                                        src={Textquotes}
                                        alt="text-quotes"
                                    />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitatio ullamco
                                        laboris nisi ut aliquip ex ea commodo cons quat. Duis aute
                                        irure dolor in reprehenderit in volup tate velit esse cillum
                                        dolore eu fugiat nulla pariatur excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia.
                                    </p>
                                    <h4>Randal Francis</h4>
                                    <strong>Creative Directior</strong>
                                </div>

                                <div className="tst-item">
                                    <img src={Triangleshape1} alt="triangle-shape1" />
                                    <img
                                        className="text-quotes"
                                        src={Textquotes}
                                        alt="text-quotes"
                                    />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitatio ullamco
                                        laboris nisi ut aliquip ex ea commodo cons quat. Duis aute
                                        irure dolor in reprehenderit in volup tate velit esse cillum
                                        dolore eu fugiat nulla pariatur excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia.
                                    </p>
                                    <h4>Randal Francis</h4>
                                    <strong>Creative Directior</strong>
                                </div>
                            </OwlCarousel>
                        </Col>

                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className="thumb">
                                <img src={Testimonialrightthumb} alt="testimonial-right-thumb" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
