import React, { Component } from 'react';
import Footer from '../../footer/Footer';
import HeaderStyle2 from '../../header/HeaderStyle2';
import Layout from '../../layout/Layout';
import Client from './Client';
import CounterHome2 from './CounterHome2';
import DownloadSection from './DownloadSection';
import Faq from './Faq';
import HeroAreaHome2 from './HeroAreaHome2';
import Pricelist from './Pricelist';
import Screeencarousel from './Screeencarousel';
import ScreenSection from './ScreenSection';
import ServiceArea from './ServiceArea';
import Testimonial from './Testimonial';
import VideoArea from './VideoArea';

export default class Home2 extends Component {
    render() {
        return (
            <Layout>
                <HeaderStyle2 />
                <HeroAreaHome2 />
                <ServiceArea />
                <DownloadSection />
                <ScreenSection />
                <CounterHome2 />
                <VideoArea />
                <Faq />
                <Screeencarousel />
                <Pricelist />
                <Testimonial />
                <Client />
                <Footer />
            </Layout>
        );
    }
}
