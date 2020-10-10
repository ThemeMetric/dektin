import React, { Component } from 'react';
import Brdbgshape from '../../assets/images/brdbg-shape.png';
import Breadcrumbs from '../../breadcrumb/Breadcrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Client from '../home/Client';
import PostDetails from './PostDetails';

export default class BlogDetails extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Breadcrumbs pagename="Blog Details" backgroundimglink={Brdbgshape} />
                <PostDetails />
                <Client />
                <Footer />
            </Layout>
        );
    }
}
