import React, { Component } from 'react';
import Brdbgshape from '../../assets/images/brdbg-shape.png';
import Breadcrumbs from '../../breadcrumb/Breadcrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Client from '../home/Client';
import Counter from '../home/Counter';
import Testimonial from '../home/Testimonial';
import VideoArea from '../home/VideoArea';
import Aboutfeature from './Aboutfeature';
import Team from './Team';

export default class About extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Breadcrumbs pagename="About" backgroundimglink={Brdbgshape} />
                <VideoArea />
                <Aboutfeature />
                <Counter />
                <Team />
                <Testimonial />
                <Client />
                <Footer />
            </Layout>
        );
    }
}
