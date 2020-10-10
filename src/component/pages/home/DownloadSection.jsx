import 'owl.carousel/dist/assets/owl.carousel.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Appstoreicon from '../../assets/images/app-store.png';
import DownloadBg from '../../assets/images/download-bg-shape.png';
import Playstoreicon from '../../assets/images/play-store.png';
import Screenshape1 from '../../assets/images/screen-shape-1.png';

const DownloadSection = () => {
    return (
        <div className="download-section bg-gray">
            <OwlCarousel
                nav
                loop
                autoplay
                autoplayTimeout={4000}
                smartSpeed={800}
                margin={0}
                items={1}
                navText={['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>']}
                className="download-carousel"
            >
                <div className="d-carousel-item">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="text-content">
                                    <h3>
                                        Use your android or ios device to{' '}
                                        <span className="theme-color">manage everything.</span>
                                    </h3>
                                    <p>
                                        Ut enim ad minim vena quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat aute dolor
                                        voluptate velit esse cillum pariatur.
                                    </p>
                                    <div className="download-store-btns">
                                        <Link to="/">
                                            <img src={Appstoreicon} alt="app-store" />{' '}
                                        </Link>
                                        <Link to="/">
                                            <img src={Playstoreicon} alt="play-store" />{' '}
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={{ span: 5, offset: 2 }}>
                                <div className="thumb-right">
                                    <img src={Screenshape1} alt="screen-shape-1" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="d-carousel-item">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="text-content">
                                    <h3>Use your android or ios device to</h3>
                                    <p>
                                        Ut enim ad minim vena quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat aute dolor
                                        voluptate velit esse cillum pariatur.
                                    </p>
                                    <div className="download-store-btns">
                                        <Link to="/">
                                            <img src={Appstoreicon} alt="app-store" />{' '}
                                        </Link>
                                        <Link to="/">
                                            <img src={Playstoreicon} alt="play-store" />
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={{ span: 5, offset: 2 }}>
                                <div className="thumb-right">
                                    <img src={Screenshape1} alt="screen-shape-1" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OwlCarousel>

            <img className="download-bg-shape" src={DownloadBg} alt="download-bg-shape" />
        </div>
    );
};

export default DownloadSection;
