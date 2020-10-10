import React, { Component } from 'react';
import Brdbgshape from '../../assets/images/brdbg-shape.png';
import Breadcrumbs from '../../breadcrumb/Breadcrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Client from '../home/Client';
import Posts from './Posts';

export default class Blog extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Breadcrumbs pagename="Blog Post" backgroundimglink={Brdbgshape} />
                <Posts />
                <Client />
                <Footer />
            </Layout>
        );
    }
}
