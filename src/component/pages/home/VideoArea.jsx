import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import TriangleShape1 from '../../assets/images/triangle-shape1.png';

class VideoArea extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        return (
            <div className="video-area pt--170 pb--100">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="video-box">
                                <div className="video-box-inner">
                                    <Button
                                        onClick={this.onOpenModal}
                                        variant="link"
                                        className="expand-video"
                                    >
                                        <i className="fa fa-play" />
                                    </Button>

                                    <Modal open={open} onClose={this.onCloseModal} center>
                                        <iframe
                                            title="video"
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/7AkbUfZjS5k"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </Modal>
                                </div>
                            </div>
                        </Col>

                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className="text-content">
                                <h3>
                                    Watch the video! How the{' '}
                                    <span className="theme-color">dektin works?</span>
                                </h3>
                                <p>
                                    Ut enim ad minim vena quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat aute dolor voluptate
                                    velit esse cillum pariatur.
                                </p>
                                <p>
                                    Ut enim ad minim vena quis nostrud exercitation ullamco
                                    voluptate velit esse cillum pariatur.
                                </p>
                                <Link to="/" className="cbtn cbtn-outline">
                                    Get Started Now
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <img src={TriangleShape1} alt="triangle-shape" className="triangle-shape1" />
            </div>
        );
    }
}

export default VideoArea;
