import 'owl.carousel/dist/assets/owl.carousel.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import ClientLogo1 from '../../assets/images/client-logo/1.png';
import ClientLogo2 from '../../assets/images/client-logo/2.png';
import ClientLogo3 from '../../assets/images/client-logo/3.png';
import ClientLogo4 from '../../assets/images/client-logo/4.png';
import ClientLogo5 from '../../assets/images/client-logo/5.png';
import ClientLogo6 from '../../assets/images/client-logo/6.png';

export default class Client extends Component {
    state = {
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };

    render() {
        return (
            <div className="client-area ptb--120">
                <Container>
                    <OwlCarousel
                        loop
                        autoplay
                        autoplayTimeout={4000}
                        smartSpeed={800}
                        margin={50}
                        responsive={this.state.responsive}
                        className="client-carousel"
                    >
                        <img src={ClientLogo1} alt="logo" />
                        <img src={ClientLogo2} alt="logo" />
                        <img src={ClientLogo3} alt="logo" />
                        <img src={ClientLogo4} alt="logo" />
                        <img src={ClientLogo5} alt="logo" />
                        <img src={ClientLogo6} alt="logo" />
                    </OwlCarousel>
                </Container>
            </div>
        );
    }
}
