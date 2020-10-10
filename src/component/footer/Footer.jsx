import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import Cta from './Cta';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Cta />
                <FooterTop />
                <FooterBottom />
                <ScrollToTop
                    showUnder={160}
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '25px',
                        width: '50px',
                        height: '50px',
                        zIndex: '9999',
                        background: '#1166e5',
                        display: 'block',
                        borderRadius: '50%',
                        color: '#fff',
                        textAlign: 'center',
                        lineHeight: '46px',
                        fontSize: '28px',
                        border: '2px solid #fff',
                    }}
                >
                    <i className="fa fa-angle-up" />
                </ScrollToTop>
            </footer>
        );
    }
}

export default Footer;
