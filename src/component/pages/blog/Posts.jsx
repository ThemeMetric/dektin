import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Postimg1 from '../../assets/images/blog/blog-img1.jpg';
import Postimg2 from '../../assets/images/blog/blog-img2.jpg';
import Postimg3 from '../../assets/images/blog/blog-img3.jpg';
import Postimg4 from '../../assets/images/blog/blog-img4.jpg';
import Rightarrow from '../../assets/images/icon/arrow-pointing-to-right-gray.png';
import Sidebar from './Sidebar';

export default class Posts extends Component {
    render() {
        return (
            <div className="blog-area bg-gray pt--120 pb--120">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src={Postimg1} alt="blog-img" />
                                    <div className="blog-date">
                                        <h5>25</h5>
                                        <span>January</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link to="/blogdetails">
                                            5 tips for offshore software development
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris.
                                    </p>
                                    <Link to="/blogdetails" className="read-more">
                                        Read more{' '}
                                        <img src={Rightarrow} alt="arrow-pointing-to-right-gray" />
                                    </Link>
                                </div>
                            </div>
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src={Postimg2} alt="blog-img" />
                                    <div className="blog-date">
                                        <h5>25</h5>
                                        <span>January</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link to="/blogdetails">
                                            Protective preventative maintenance
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris.
                                    </p>
                                    <Link to="/blogdetails" className="read-more">
                                        Read more{' '}
                                        <img src={Rightarrow} alt="arrow-pointing-to-right-gray" />
                                    </Link>
                                </div>
                            </div>
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src={Postimg3} alt="blog-img" />
                                    <div className="blog-date">
                                        <h5>25</h5>
                                        <span>January</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link to="/blogdetails">
                                            Life advice looking through a window
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris.
                                    </p>
                                    <Link to="/blogdetails" className="read-more">
                                        Read more{' '}
                                        <img src={Rightarrow} alt="arrow-pointing-to-right-gray" />
                                    </Link>
                                </div>
                            </div>
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src={Postimg4} alt="blog-img" />
                                    <div className="blog-date">
                                        <h5>25</h5>
                                        <span>January</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link to="/blogdetails">
                                            Compare prices find the best computer accessory
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris.
                                    </p>
                                    <Link to="/blogdetails" className="read-more">
                                        Read more{' '}
                                        <img src={Rightarrow} alt="arrow-pointing-to-right-gray" />
                                    </Link>
                                </div>
                            </div>
                            <ul className="pagination-wrapper">
                                <li>
                                    <Link to="/blog">1</Link>
                                </li>
                                <li>
                                    <Link to="/blog">2</Link>
                                </li>
                                <li>
                                    <Link to="/blog">3</Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        <img src={Rightarrow} alt="arrow-pointing-to-right-gray" />
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col xl={{ span: 3, offset: 1 }} lg={4}>
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
