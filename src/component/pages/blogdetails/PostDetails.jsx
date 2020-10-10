import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Postimg1 from '../../assets/images/blog/blog-img1.jpg';
import Arrowrightgolden from '../../assets/images/icon/arrow-pointing-to-left-golden.png';
import Recentpostimg1 from '../../assets/images/recent-post/img1.jpg';
import Recentpostimg2 from '../../assets/images/recent-post/img2.jpg';
import profilephoto from '../../assets/images/team/img1.jpg';
import Sidebar from '../blog/Sidebar';

export default class Posts extends Component {
    render() {
        return (
            <div className="blog-area bg-gray pt--120 pb--120">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="single-blog single-details">
                                <div className="thumb">
                                    <img src={Postimg1} alt="blog-img" />
                                    <div className="blog-date">
                                        <h5>25</h5>
                                        <span>January</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>5 tips for offshore software development</h2>
                                    <p>
                                        Sed laoreet pharetra magna eu gravida. Nullam massa magna,
                                        hendrerit id conequat vita semer in sapien. Vivamus sodales
                                        dolor quis ipsum imperdiet, nec tempor orcien interd. Nunc
                                        facilisis and neque id semper ullamcorper. Nam ac faucibus
                                        arcu, facilisis finibus urna. Integer pulvinar nulla sit
                                        amet ipsum facilisis, sit amet placerat orci pretium.
                                    </p>
                                    <p>
                                        Sed laoreet pharetra magna eu gravida. Nullam massa magna,
                                        hendrerit id conequat vita semer in sapien. Vivamus sodales
                                        dolor quis ipsum imperdiet, nec tempor orcien interd. Nunc
                                        facilisis and neque id semper ullamcorper. Nam ac faucibus
                                        arcu, facilisis finibus urna. Integer pulvinar nulla sit
                                        amet ipsum facilisis, sit amet placerat orci pretium.
                                    </p>
                                    <blockquote>
                                        <p>
                                            Sed laoreet pharetra magna eu gravida. Nullam massa
                                            magna, hendrerit id cone in sapien. Vivamus sodales
                                            dolor quis ipsum imperdiet, nec tempor orcien interd
                                            neque id semper ullamcorper. Nam faucibus arcu facilisis
                                            finibus urna Integer sit amet ipsum facilisis, sit amet
                                            placerat orci pretium.
                                        </p>
                                    </blockquote>
                                    <p>
                                        Sed laoreet pharetra magna eu gravida. Nullam massa magna,
                                        hendrerit id conequat vita semer in sapien. Vivamus sodales
                                        dolor quis ipsum imperdiet, nec tempor orcien interd. Nunc
                                        facilisis and neque id semper ullamcorper. Nam ac faucibus
                                        arcu, facilisis finibus urna. Integer pulvinar nulla sit
                                        amet ipsum facilisis, sit amet placerat orci pretium.
                                    </p>
                                    <p>
                                        Sed laoreet pharetra magna eu gravida. Nullam massa magna,
                                        hendrerit id conequat vita semer in sapien. Vivamus sodales
                                        dolor quis ipsum imperdiet, nec tempor orcien interd. Nunc
                                        facilisis and neque id semper ullamcorper. Nam ac faucibus
                                        arcu, facilisis finibus urna. Integer pulvinar nulla sit
                                        amet ipsum facilisis, sit amet placerat orci pretium.
                                    </p>
                                </div>
                            </div>

                            <div className="blog-pagination-nextprev">
                                <div className="left">
                                    <Link to="/">
                                        <p>Prev</p>
                                        <div className="thumb">
                                            <img src={Recentpostimg1} alt="post" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="right">
                                    <Link to="/">
                                        <div className="thumb">
                                            <img src={Recentpostimg2} alt="post" />
                                        </div>
                                        <p>Next</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h4>Comments (15)</h4>
                                <div className="comment">
                                    <div className="thumb">
                                        <img src={profilephoto} alt="team" />
                                    </div>
                                    <div className="content">
                                        <div className="cmnt-mt-top">
                                            <h5>Habib Ibne Ashuk</h5>
                                            <span>Web Developer</span>
                                        </div>
                                        <p>
                                            Many businesses, large and small, have a huge source of
                                            great ideas that and grow, and yet so many of these
                                            companies never think of using this this highly valuable
                                            asset own people.
                                        </p>
                                    </div>
                                    <Link to="/blogdetails">
                                        <img src={Arrowrightgolden} alt="d" />
                                        Reply
                                    </Link>
                                </div>
                                <div className="comment">
                                    <div className="thumb">
                                        <img src={profilephoto} alt="team" />
                                    </div>
                                    <div className="content">
                                        <div className="cmnt-mt-top">
                                            <h5>Habib Ibne Ashuk</h5>
                                            <span>Web Developer</span>
                                        </div>
                                        <p>
                                            Many businesses, large and small, have a huge source of
                                            great ideas that and grow, and yet so many of these
                                            companies never think of using this this highly valuable
                                            asset own people.
                                        </p>
                                    </div>
                                    <Link to="/blogdetails">
                                        <img src={Arrowrightgolden} alt="d" />
                                        Reply
                                    </Link>
                                </div>
                                <div className="comment">
                                    <div className="thumb">
                                        <img src={profilephoto} alt="team" />
                                    </div>
                                    <div className="content">
                                        <div className="cmnt-mt-top">
                                            <h5>Habib Ibne Ashuk</h5>
                                            <span>Web Developer</span>
                                        </div>
                                        <p>
                                            Many businesses, large and small, have a huge source of
                                            great ideas that and grow, and yet so many of these
                                            companies never think of using this this highly valuable
                                            asset own people.
                                        </p>
                                    </div>
                                    <Link to="/blogdetails">
                                        <img src={Arrowrightgolden} alt="d" />
                                        Reply
                                    </Link>
                                </div>
                            </div>

                            <h4 className="lv-a-comment">Leave a comments:</h4>
                            <div className="comment-form">
                                <form action="/">
                                    <Row>
                                        <Col md={6}>
                                            <input type="text" placeholder="First Name:" />
                                        </Col>
                                        <Col md={6}>
                                            <input type="text" placeholder="Last Name:" />
                                        </Col>
                                        <Col md={6}>
                                            <input type="text" placeholder="Email:" />
                                        </Col>
                                        <Col md={6}>
                                            <input type="text" placeholder="Phone:" />
                                        </Col>
                                        <Col>
                                            <textarea name="msg" id="msg" placeholder="Message" />
                                        </Col>
                                    </Row>
                                    <button type="submit" className="cbtn">
                                        Send Message
                                    </button>
                                </form>
                            </div>
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
