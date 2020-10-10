import 'owl.carousel/dist/assets/owl.carousel.css';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import Downloadbg from '../../assets/images/download-bg-shape2.png';
import Fastestmanagement from '../../assets/images/icon/fastest-management.png';
import Solveseverything from '../../assets/images/icon/solves-everything.png';
import Screenshape3 from '../../assets/images/screen-shape-3.png';

class Screeencarousel extends Component {
    render() {
        return (
            <div className="screencarou-selsection download-section bg-gray">
                <div className="download-carousel">
                    <OwlCarousel
                        nav
                        loop
                        autoplay
                        autoplayTimeout={4000}
                        smartSpeed={800}
                        margin={0}
                        items={1}
                        navText={[
                            '<i class="fa fa-arrow-left"></i>',
                            '<i class="fa fa-arrow-right"></i>',
                        ]}
                        className="download-carousel"
                    >
                        <div className="d-carousel-item">
                            <Container>
                                <Row>
                                    <Col lg={5}>
                                        <div className="thumb-right">
                                            <img src={Screenshape3} alt="screen-shape-1" />
                                        </div>
                                    </Col>

                                    <Col lg={{ span: 5, offset: 2 }}>
                                        <div className="text-content">
                                            <h3>
                                                Super clean user interface for easier use.{' '}
                                                <span className="theme-color">
                                                    Screenshot of dektin app.
                                                </span>
                                            </h3>
                                            <ul className="txt-content-list">
                                                <li>
                                                    <div className="icon">
                                                        <img
                                                            src={Solveseverything}
                                                            alt="solves-everything"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Quick Settings</h4>
                                                        <p>
                                                            Ut enim ad minim vena quis nostrud
                                                            exercitation laboris nisi ut aliquip ex
                                                            ea commodo consequat voluptate velit
                                                            esse cillum pariatur.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <img
                                                            src={Fastestmanagement}
                                                            alt="fastest-management"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Looks Perfect</h4>
                                                        <p>
                                                            Ut enim ad minim vena quis nostrud
                                                            exercitation laboris nisi ut aliquip ex
                                                            ea commodo consequat voluptate velit
                                                            esse cillum pariatur.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="d-carousel-item">
                            <Container>
                                <Row>
                                    <Col lg={5}>
                                        <div className="thumb-right">
                                            <img src={Screenshape3} alt="screen-shape-1" />
                                        </div>
                                    </Col>

                                    <Col lg={{ span: 5, offset: 2 }}>
                                        <div className="text-content">
                                            <h3>
                                                Super clean user interface for easier use.{' '}
                                                <span className="theme-color">
                                                    Screenshot of dektin app.
                                                </span>
                                            </h3>
                                            <ul className="txt-content-list">
                                                <li>
                                                    <div className="icon">
                                                        <img
                                                            src={Solveseverything}
                                                            alt="solves-everything"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Quick Settings</h4>
                                                        <p>
                                                            Ut enim ad minim vena quis nostrud
                                                            exercitation laboris nisi ut aliquip ex
                                                            ea commodo consequat voluptate velit
                                                            esse cillum pariatur.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <img
                                                            src={Fastestmanagement}
                                                            alt="fastest-management"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Looks Perfect</h4>
                                                        <p>
                                                            Ut enim ad minim vena quis nostrud
                                                            exercitation laboris nisi ut aliquip ex
                                                            ea commodo consequat voluptate velit
                                                            esse cillum pariatur.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </OwlCarousel>
                </div>

                <img className="download-bg-shape2" src={Downloadbg} alt="download-bg-shape" />
            </div>
        );
    }
}

export default Screeencarousel;
