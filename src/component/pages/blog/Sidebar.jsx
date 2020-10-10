import React from 'react';
import { Link } from 'react-router-dom';
import Postimgsidebar1 from '../../assets/images/recent-post/img1.jpg';
import Postimgsidebar2 from '../../assets/images/recent-post/img2.jpg';
import Postimgsidebar3 from '../../assets/images/recent-post/img3.jpg';
import Postimgsidebar4 from '../../assets/images/recent-post/img4.jpg';

const Sidebar = () => {
    return (
        <div className="slidebar-area">
            <div className="widget widget-search">
                <form action="/home">
                    <input type="text" placeholder="Search here" />
                    <button type="button" value="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>
            </div>

            <div className="widget widget-category">
                <div className="widget-body">
                    <h4 className="widget-title">Post Category</h4>
                    <ul className="list">
                        <li>
                            <Link to="/">
                                Web Development <span>25</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                UI/UX Design <span>18</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Digital Marketing <span>35</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Facebook Marketing <span>16</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Brand Identity <span>26</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="widget widget-recent-post">
                <div className="widget-body">
                    <h4 className="widget-title">Recent Post</h4>
                    <div className="recent-post">
                        <div className="rc-single">
                            <div className="thumb">
                                <img src={Postimgsidebar1} alt="rcpost" />
                            </div>
                            <div className="content">
                                <h4>
                                    <Link to="/blogdetails">Web Development</Link>
                                </h4>
                                <span>03.08.2019</span>
                            </div>
                        </div>
                        <div className="rc-single">
                            <div className="thumb">
                                <img src={Postimgsidebar2} alt="rcpost" />
                            </div>
                            <div className="content">
                                <h4>
                                    <Link to="/blogdetails">User Interface Design</Link>
                                </h4>
                                <span>03.08.2019</span>
                            </div>
                        </div>
                        <div className="rc-single">
                            <div className="thumb">
                                <img src={Postimgsidebar3} alt="rcpost" />
                            </div>
                            <div className="content">
                                <h4>
                                    <Link to="/blogdetails">Android Apps Development</Link>
                                </h4>
                                <span>03.08.2019</span>
                            </div>
                        </div>
                        <div className="rc-single">
                            <div className="thumb">
                                <img src={Postimgsidebar4} alt="rcpost" />
                            </div>
                            <div className="content">
                                <h4>
                                    <Link to="/blogdetails">Digital Marketing</Link>
                                </h4>
                                <span>03.08.2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="widget widget-tags">
                <div className="widget-body">
                    <h4 className="widget-title">Popular Tags</h4>
                    <ul className="tags">
                        <li>
                            <Link to="/blog">Development</Link>
                        </li>
                        <li>
                            <Link to="/blog">Design</Link>
                        </li>
                        <li>
                            <Link to="/blog">Design</Link>
                        </li>
                        <li>
                            <Link to="/blog">Development</Link>
                        </li>
                        <li>
                            <Link to="/blog">Design</Link>
                        </li>
                        <li>
                            <Link to="/blog">Development</Link>
                        </li>
                        <li>
                            <Link to="/blog">Design</Link>
                        </li>
                        <li>
                            <Link to="/blog">Development</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
