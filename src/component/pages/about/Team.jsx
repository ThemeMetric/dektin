import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teamimg1 from '../../assets/images/team/img1.jpg';
import Teamimg2 from '../../assets/images/team/img2.jpg';
import Teamimg3 from '../../assets/images/team/img3.jpg';
import Teamimg4 from '../../assets/images/team/img4.jpg';
import Teamimg5 from '../../assets/images/team/img5.jpg';
import Teamimg6 from '../../assets/images/team/img6.jpg';
import Teamimg7 from '../../assets/images/team/img7.jpg';
import Teamimg8 from '../../assets/images/team/img8.jpg';

export default class Team extends Component {
    render() {
        return (
            <div className="team-area pt--120 pb--80">
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
                            <div className="section-title text-center pb--50">
                                <h2>Team Members</h2>
                                <p>
                                    Ut enim ad minim vena quis nostrud exercitation ullamco
                                    voluptate velit esse cillum pariatur.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg1} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg2} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg3} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg4} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg5} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg6} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg7} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="single-team">
                                <div className="thumb">
                                    <img src={Teamimg8} alt="team thumb" />
                                </div>
                                <div className="content">
                                    <h3>Holly Rodriquez</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
