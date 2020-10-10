import React, { Component } from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Client from './Client';
import Counter from './Counter';
import DownloadSection from './DownloadSection';
import Faq from './Faq';
import HeroArea from './HeroArea';
import Pricelist from './Pricelist';
import Screeencarousel from './Screeencarousel';
import ScreenSection from './ScreenSection';
import ServiceArea from './ServiceArea';
import Testimonial from './Testimonial';
import VideoArea from './VideoArea';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <HeroArea />
                <ServiceArea />
                <DownloadSection />
                <ScreenSection />
                <Counter />
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
