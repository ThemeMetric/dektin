import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sfastestimg from '../../assets/images/icon/fastest-management.png';
import Solvesimg from '../../assets/images/icon/solves-everything.png';
import ScreenShape2 from '../../assets/images/screen-shape-2.png';

const ScreenSection = () => {
    return (
        <div className="screen-section-one pt--80 pb--90">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="thumb">
                            <img src={ScreenShape2} alt="screen-shape-2" />
                        </div>
                    </Col>

                    <Col xl={{ span: 6, offset: 1 }} lg={7}>
                        <div className="text-content">
                            <h3>
                                Simple and <span className="theme-color">powerful dashboard</span>.
                                Make your life easy, get a better way to communicate,
                            </h3>
                            <ul className="txt-content-list">
                                <li>
                                    <div className="icon">
                                        <img src={Solvesimg} alt="solves-everything" />
                                    </div>
                                    <div className="content">
                                        <h4>Solves Everything</h4>
                                        <p>
                                            Ut enim ad minim vena quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat aute
                                            dolor voluptate velit esse cillum pariatur.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src={Sfastestimg} alt="fastest-management" />
                                    </div>
                                    <div className="content">
                                        <h4>Fastest Management</h4>
                                        <p>
                                            Ut enim ad minim vena quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat aute
                                            dolor voluptate velit esse cillum pariatur.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreenSection;
