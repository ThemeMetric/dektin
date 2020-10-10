import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoImg from '../assets/images/icon/logo.png';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
    return (
        <header id="header">
            <div className="header-area" id="sticky-header">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Logo logolink="/" logo={LogoImg} />
                        </Col>

                        <Col lg={9} className="d-lg-block d-none">
                            <Menu />
                        </Col>

                        <Col className="col-12 d-lg-none">
                            <div className="mobile_menu" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;
