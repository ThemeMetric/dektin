import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import Playbutton from '../../assets/images/icon/play-button.png';

class ResponsiveModal extends Component {
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
            <div className="video-btns-area">
                <Link to="/" className="cbtn cbtn-white">
                    Get Started Now
                </Link>
                <Button onClick={this.onOpenModal} variant="link" className="expand-video">
                    <img src={Playbutton} alt="play button" /> Watch Video
                </Button>{' '}
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
        );
    }
}

export default ResponsiveModal;
